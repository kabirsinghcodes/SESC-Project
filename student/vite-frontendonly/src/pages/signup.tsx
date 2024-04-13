import "@radix-ui/themes/styles.css";
import { Card, Flex, Text, TextField, Button, Theme } from "@radix-ui/themes";
import { Link as LinkWithPage } from "react-router-dom";
export default function Signup() {
  return (
    <Theme
      accentColor="jade"
      radius="full"
      panelBackground="translucent"
      appearance="dark"
    >
      <div className="flex min-h-screen flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <div className="flex flex-col items-center justify-center flex-1">
          <Card className="mt-8 p-4" style={{ width: 370 }}>
            <Flex direction={"column"} gap={"5"}>
              <Flex direction={"column"}>
                <h1 className="text-2xl font-semibold">New Account</h1>
              </Flex>
              <Flex direction={"column"} gap={"1"}>
                <Text size={"2"} className="font-semibold">
                  Username
                </Text>
                <TextField.Input placeholder="Enter your Username" />
              </Flex>
              <Flex direction={"column"} gap={"1"}>
                <Text size={"2"} className="font-semibold">
                  Email
                </Text>
                <TextField.Input placeholder="Enter your Email" />
              </Flex>
              <Flex direction={"column"} gap={"1"}>
                <Flex justify={"between"}>
                  <Text size={"2"} className="font-semibold">
                    Password
                  </Text>
                </Flex>
                <TextField.Input size="3" placeholder="Enter your password" />
              </Flex>
              <Flex gap={"2"} className="place-content-end gap-2">
                <Button variant="soft">
                  <LinkWithPage to="/profile">
                    <Text size={"2"}>SUBMIT</Text>
                  </LinkWithPage>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </div>
      </div>
    </Theme>
  );
}
