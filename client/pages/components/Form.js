import * as React from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import styles from "../../styles/Form.module.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      
    };
  }

  verify(e){
      e.preventDefault();
      console.log(e);
  }

  render() {
    return (
      <form onSubmit={this.verify}>
        <Stack spacing={7} className={styles.form}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
            <Input type="tel" placeholder="Phone number" />{" "}
          </InputGroup>
          <Button colorScheme="blue" type="submit" isFullWidth="true">
            Verify
          </Button>
          {this.state.isLoading ? <Button
            isLoading
            loadingText="Verifying..."
            colorScheme="teal"
            variant="outline"
          >
            Submit
          </Button> : ""}
        </Stack>
      </form>
    );
  }
}

export default Form;
