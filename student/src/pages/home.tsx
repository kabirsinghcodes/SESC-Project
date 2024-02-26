import "@radix-ui/themes/styles.css";
import { Flex, Button, Theme } from "@radix-ui/themes";
import { Link as LinkWithPage } from "react-router-dom";

export default function Home() {
  return (
    <Theme>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <Flex direction={"column"} gap={"5"}>
          <Flex direction={"column"}>
            <h1 className="text-2xl lg:text-7xl font-semibold">
              Welcome To Finance App!
            </h1>
          </Flex>
          <div className="flex justify-center">
            <Button variant="solid" size={"4"}>
              <LinkWithPage to="/about">
                <p className="text-lg p-4">Get Started!</p>
              </LinkWithPage>
            </Button>
          </div>
        </Flex>
      </div>
    </Theme>
  );
}
