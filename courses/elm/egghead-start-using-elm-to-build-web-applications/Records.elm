module Records exposing (..)
import Html exposing (text)

type alias Dog =
    {
        name: String
    ,   age: Int
    }

dog = 
    {
        name = "Spock"
    ,   age = 3
    }

renderDog: Dog -> String
renderDog myDog = 
    "My Dog is called " ++ myDog.name ++ " and he is " ++ (String.fromInt myDog.age) ++ " years old."

main = 
    text <| renderDog dog
