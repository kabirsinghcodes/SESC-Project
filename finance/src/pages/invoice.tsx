import "@radix-ui/themes/styles.css";
import { Card, Flex, Text, TextField, Button, Theme } from "@radix-ui/themes";

export default function Invoices() {

  

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
                <h1 className="text-2xl font-semibold">Invoice</h1>
              </Flex>
              <Flex direction={"row"} gap={"9"}>
                <Flex justify={"between"}>
                  <h2>Reference : </h2>
                </Flex>
                <Flex justify={"between"}>
                  <h2>ABC</h2>
                </Flex>
              </Flex>
              <Flex direction={"row"} gap={"9"}>
                <Flex justify={"between"}>
                  <h2>Student ID : </h2>
                </Flex>
                <Flex justify={"between"}>
                  <h2>ABC</h2>
                </Flex>
              </Flex>
              <Flex direction={"row"} gap={"9"}>
                <Flex justify={"between"}>
                  <h2>Amount : </h2>
                </Flex>
                <Flex justify={"between"}>
                  <h2>ABC</h2>
                </Flex>
              </Flex>
              <Flex direction={"row"} gap={"9"}>
                <Flex justify={"between"}>
                  <h2>Due Date : </h2>
                </Flex>
                <Flex justify={"between"}>
                  <h2>ABC</h2>
                </Flex>
              </Flex>
              <Flex direction={"row"} gap={"9"}>
                <Flex justify={"between"}>
                  <h2>Type : </h2>
                </Flex>
                <Flex justify={"between"}>
                  <h2>ABC</h2>
                </Flex>
              </Flex>
              <Flex direction={"row"} gap={"9"}>
                <Flex justify={"between"}>
                  <h2>Status : </h2>
                </Flex>
                <Flex justify={"between"}>
                  <h2>ABC</h2>
                </Flex>
              </Flex>
              <Flex gap={"2"} className="place-content-end gap-2">
                <Button variant="solid" size={"2"} color="plum">
                  <span className="text-lg p-4">Pay</span>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </div>
      </div>
    </Theme>
  );
}
