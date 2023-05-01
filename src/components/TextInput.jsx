import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react"


const TextInput = (extractKeywords) => {
    const [text,setText]=useState("");
    const toast=useToast()
    const submitText=()=>{
        if(!text){
            toast({
                title: 'Text area must have some text',
                description: "Please type something for extracting keywords",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })

            return
        }
        extractKeywords(text);
        setText("")
    }
  return (
    <>
    <Textarea 
    bg="blue.400" 
    color="white"
    padding={4}
    marginTop={6}
    height={200}
    value={text}
    onChange={(e)=>setText(e.target.value)}

    />
    <Button 
    bg="blue.500"
    color="white"
    marginTop={4}
    width="100%"
    _hover={{bg:"blue.700"}}
    onClick={submitText}
    >
        Extract Keywords
    </Button>
    </>
  )
}

export default TextInput