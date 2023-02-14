import { StyledNavBar } from "../styles/NavBar.styled";
import { Pressable } from "react-native";
import { StyledImage } from "../styles/StyledImage.style";

export const Navbar = ({navigation}) => {
    return (
        <StyledNavBar>
            <Pressable onPress={() => navigation.navigate("Cards")}>
                <StyledImage
                    height="50px" 
                    width="50px" 
                    source={require('../images/cards.png')}
                />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Import")}>
                <StyledImage 
                    height="50px" 
                    width="50px" 
                    source={require('../images/import.png')}
                />
            </Pressable>
        </StyledNavBar>
    );
}