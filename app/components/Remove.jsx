"use client";
import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import api from "./api";

const Remove = ({ memberId, setMembers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  const getMembers = async () => {
    const data = await api.getMembers();
    console.log(data);
    setMembers(data.members);
  };

  const deleteMember = async () => {
    try {
      setLoading(true);

      await api.removeMember(memberId);

      onClose();
      setLoading(false);
      toast({
        title: "member deleted",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      await getMembers();
    } catch (error) {
      toast({
        title: `${error.response.data.msg}`,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
            <Button
              colorScheme="red"
              isLoading={loading}
              ml={3}
              onClick={async () => {
                await deleteMember();
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Remove;
