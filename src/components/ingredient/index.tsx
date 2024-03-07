import { Pressable, PressableProps, Text, Image } from "react-native"

import { styles } from "./styles"

export type IngredientsPros = {
  name: string
  image: string
  selected?: boolean 
}

export function Ingredient({ name, image, selected = false, ...rest}: IngredientsPros & PressableProps) { 
    return (
      <Pressable style={styles.conteiner} {...rest}>
      <Image source={require("@/src/assets/apple.png")} style={styles.image}/>
      <Text style={styles.title}>Maça</Text>
    </Pressable>
    )
}