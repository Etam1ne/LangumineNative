import { StyledNavBar } from "../styles/NavBar.styled";
import { Pressable } from "react-native";
import { StyledImage } from "../styles/StyledImage.style";

export const Navbar = ({navigation}) => {
    return (
        <StyledNavBar>
            <Pressable onPress={() => navigation.navigate("Cards")}>
                <StyledImage
                    height="40px" 
                    width="40px" 
                    source={require('../images/cards.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Test")}>
                <StyledImage 
                    height="40px" 
                    width="40px" 
                    source={require('../images/test.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Import")}>
                <StyledImage 
                    height="40px" 
                    width="40px" 
                    source={require('../images/import.png')}
                />
            </Pressable>
        </StyledNavBar>
    );
}