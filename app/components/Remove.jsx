"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";

const Remove = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <AiFillCloseCircle color="red" onClick={onOpen} />
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader
            style={{
              textAlign: "center",
            }}
          >
            Delete Member?
          </AlertDialogHeader>
          <AlertDialogCloseButton
            size="sm"
            style={{
              background: "red",
              color: "white",
              borderRadius: "50%",
            }}
          />
          <AlertDialogBody
            style={{
              textAlign: "center",
            }}
          >
            Are you sure you want to remove this account from the
            organization.This action cannot be undone
          </AlertDialogBody>
          <AlertDialogFooter
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Remove;
