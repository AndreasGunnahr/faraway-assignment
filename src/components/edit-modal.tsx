import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { People } from "types/starwars";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: People;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  character,
}) => {
  const [name, setName] = useState<string>(character.name);
  const [dateOfBirth, setDateOfBirth] = useState<string>(character.birth_year);
  const [weight, setWeight] = useState<string>(character.mass);
  const [height, setHeight] = useState<string>(character.height);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onClose();
    /* 
  NOTES:  
  - We should here make a PATCH call in to our redux StarwarsAPI to update the selected character's information.
  - We should probably also implement a form validation package to validate the form before submitting it correctly, and 
    display the errors to the user if there are any.
  */
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight="bold" fontSize="xl" data-testid="modal-header">
          Edit character information
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold">Name</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Text mt="4" fontWeight="bold">
            Date of birth
          </Text>
          <Input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <Text mt="4" fontWeight="bold">
            Weight
          </Text>
          <Input value={weight} onChange={(e) => setWeight(e.target.value)} />
          <Text mt="4" fontWeight="bold">
            Height
          </Text>
          <Input value={height} onChange={(e) => setHeight(e.target.value)} />
        </ModalBody>

        <ModalFooter>
          <Button
            bg="teal.600"
            color="white"
            mr={3}
            _hover={{
              bg: "teal.500",
            }}
            isDisabled={
              name === character.name &&
              dateOfBirth === character.birth_year &&
              weight === character.mass &&
              height === character.height
            }
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
