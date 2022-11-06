import axios from "axios";
import {
  Button,
  FormControl,
  Image,
  Input,
  Modal,
  Text,
  TextArea,
  VStack
} from "native-base";

import { useState } from "react";
import logo from "../logo.svg";

const Form = () => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [ open, setOpen ] = useState(false);

  const validate = () => {
    if (formData.firstName === undefined) {
      setErrors({ ...errors, firstName: "Name is required" });
      return false;
    }
    if (formData.lastName === undefined) {
      setErrors({ ...errors, lastName: "Last name is required" });
      return false;
    }

    return true;
  };

  const openModal = () => {
    setOpen(true);
  };
  const onSubmit =  (e) => {
    e.preventDefault();

    if (validate) {
      axios.post("https://tmg-form-api.onrender.com/api/v1/data", formData).then((res) => {
        openModal();
      });
    }
    // clear form inputs
    setData({});
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <VStack
        width="90%"
        mx="3"
        maxW="600px"
        marginTop={5}
        direction={{ base: "column", md: "column" }}
      >
        <FormControl isRequired isInvalid={"firstName" in errors} >
          <FormControl.Label
            _text={{
              color: "muted.800",
              fontFamily: "Open Sans",
              fontSize: "sm",
            }}
          >
            Name
          </FormControl.Label>
          <Input

            onChangeText={(value) => setData({ ...formData, firstName: value })}
            value={formData.firstName}
            marginBottom={3}
            color="muted.800"
            fontFamily="Open Sans"
            fontSize="sm"
          />
          {"name" in errors ? (
            <FormControl.ErrorMessage>
              Name is required
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isRequired isInvalid={"lastName" in errors}>
          <FormControl.Label
            _text={{
              color: "muted.800",
              fontFamily: "Open Sans",
              fontSize: "sm",
            }}
          >
            Last name
          </FormControl.Label>
          <Input

            onChangeText={(value) => setData({ ...formData, lastName: value })}
            marginBottom={3}
            value={formData.lastName}
            color="muted.800"
            fontFamily="Open Sans"
            fontSize="sm"
          />
          {"lastName" in errors ? (
            <FormControl.ErrorMessage>
              Last name is required
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isRequired isInvalid={"email" in errors}>
          <FormControl.Label
            _text={{
              color: "muted.800",
              fontFamily: "Open Sans",
              fontSize: "sm",
            }}
          >
            Email
          </FormControl.Label>
          <Input

            onChangeText={(value) => setData({ ...formData, email: value })}
            marginBottom={3}
            value={formData.email}
            color="muted.800"
            fontFamily="Open Sans"
            fontSize="sm"
          />
          {"email" in errors ? (
            <FormControl.ErrorMessage>
              Email is required
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: "muted.800",
              fontFamily: "Open Sans",
              fontSize: "sm",
            }}
          >
            Phone number
          </FormControl.Label>
          <Input

            onChangeText={(value) => setData({ ...formData, contactNumber: value })}
            marginBottom={3}
            value={formData.contactNumber}
            color="muted.800"
            fontFamily="Open Sans"
            fontSize="sm"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: "muted.800",
              fontFamily: "Open Sans",
              fontSize: "sm",
            }}
          >
            Message to the host
          </FormControl.Label>
          <TextArea

            onChangeText={(value) => setData({ ...formData, message: value })}
            color="muted.800"
            fontFamily="Open Sans"
            value={formData.message}
            fontSize="sm"
          />
        </FormControl>
        <Button
          onPress={onSubmit}
          mt="5"
          backgroundColor={"rgb(213,92,25)"}
          width={"150px"}
          alignSelf="center"
          _text={{
            color: "white",
            fontFamily: "Open Sans",
            fontSize: "sm",
            bold: true,
          }}
        >
          SUBMIT
        </Button>
      </VStack>

      <Modal
        isOpen={open}
        onClose={closeModal}
        // safeAreaTop={true}
        marginTop={150}
        marginBottom={"auto"}
        justifyContent="flex-start"
        // backgroundColor={"white"}


      >
        <Modal.Content
          maxWidth="400px"
          alignItems="center"
          justifyContent="center"
          padding={10}
           backgroundColor={"white"}
        >
          <Modal.CloseButton />

          <Image
            source={{ uri: logo }}
            resizeMode="contain"
            width={300}
            height={60}
            alt="The Mortgage Group logo"
          />

          <Modal.Body
             backgroundColor={"white"}
          >
            <Text color="muted.800" fontSize="lg" fontFamily="Open Sans">
              Thank you!
            </Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Form;
