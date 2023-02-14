import { AppContainer, Container } from "../styles/Container.styled";
import { Navbar } from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { selectTable, loadTable } from "./store";
import { useRef, useState} from "react";
import { read, readFile, utils, WorkBook, WorkSheet } from "xlsx";
import { DocumentResult, getDocumentAsync } from "expo-document-picker"
import { NativeEventEmitter, Pressable, Button } from "react-native";
import * as FileSystem from 'expo-file-system';

export const Import = ({navigation}) => {
    const table = useAppSelector(selectTable)
    const dispatch = useAppDispatch();

    const [file, setFile] = useState<string[][]>([[]]);

    const columns = useRef<string[]>(["Word", "Translation"]);
    const wordIndex = useRef<number>(0);
    const translationIndex = useRef<number>(1);

    const handleSubmit = () => {
        const filteredSheet: string[][] = file
        .filter( (data: string[], index: number) => {
            if (!data[wordIndex.current] || !data[translationIndex.current] ||index === 0) return false
            return true;
          })
        .map((data: string[]) => {
            return [ data[wordIndex.current], data[translationIndex.current]]
        });
        dispatch(loadTable(filteredSheet))
        console.log(table)
    }

    const handleFileUpload = async () => {
        try {
            const response: DocumentResult = await getDocumentAsync({
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            if (response.type !== "success") {
                throw new Error("User didn't select a document");
            }
            else {
                const xlsx: string = await FileSystem.readAsStringAsync(response.uri, { encoding: "base64"})
                const workbook: WorkBook = read(xlsx);
                const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData: string[][] = utils.sheet_to_json(worksheet, {
                    header: 1
                })
                setFile(jsonData);
                columns.current = jsonData[0];
                console.log(jsonData)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleSelector = (e: React.ChangeEvent<HTMLSelectElement>,column: React.MutableRefObject<number>) => {
        column.current = columns.current.indexOf(e.target.value);
    }
    
    return (
        <AppContainer>
                <Container>
                    <Button title="upload" onPress={handleFileUpload}/>
                    <Button title="submit" onPress={handleSubmit}/>
                </Container>
            <Navbar navigation={navigation}/>
        </AppContainer>
    );
}