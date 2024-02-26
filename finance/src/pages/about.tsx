import "@radix-ui/themes/styles.css";
import {
  Card,
  Flex,
  Text,
  TextField,
  Button,
  Link,
  Theme,
} from "@radix-ui/themes";
import Head from "../components/head";

export default function About() {
  return (
    <Theme
      accentColor="plum"
      radius="full"
      panelBackground="translucent"
      appearance="dark"
    >
      <div className="flex min-h-screen flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <div className="flex flex-col items-center justify-center flex-1">
          <Card className="mt-8 p-4" style={{ width: 370 }}>
            <Flex direction={"column"} gap={"5"}>
              <Flex direction={"column"}>
                <h1 className="text-2xl font-semibold">
                  Fetch your Invoice here :)
                </h1>
                {/* <p className="text-sm font-medium text-neutral-300">
                  Create a new account
                </p> */}
              </Flex>
              <Flex direction={"column"} gap={"1"}>
                <Flex justify={"between"}>
                  <Text size={"2"} className="font-semibold">
                    Enter Invoice Code
                  </Text>
                </Flex>
                <TextField.Input
                  size="3"
                  placeholder="Enter your invoice code"
                />
              </Flex>
              <Flex gap={"2"} className="place-content-end gap-2">
                <Button variant="soft">
                  <Text size={"2"}>Get Invoice</Text>
                </Button>
                {/* <Button variant="solid">Sign in</Button> */}
              </Flex>
            </Flex>
          </Card>
        </div>
      </div>
    </Theme>
  );
}
