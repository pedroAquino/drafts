module Lists exposing (..)
import Html exposing (text)
import List

type alias Person = 
    {
        name: String,
        age: Int
    }

people = 
    [
        { name = "Legolás", age = 2931 },
        { name = "Gimli", age = 139 }
    ]

names: List Person -> List String
names peeps = 
    List.map (\peep -> peep.name) peeps

findPerson: String -> List Person -> Maybe String
findPerson name peeps =
    List.foldl (\value acc ->
        case acc of
            Just _ ->
                acc
            Nothing ->
                if value.name == name then Just value.name else Nothing
    )
    Nothing
    peeps


main = 
    text <| (findPerson "Legolás" people)