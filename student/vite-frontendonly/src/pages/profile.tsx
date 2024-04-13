import "@radix-ui/themes/styles.css";
import { Button, Card, Flex, Text, Theme } from "@radix-ui/themes";

const ProfilePage = () => {
  return (
    <Theme
      accentColor="jade"
      radius="full"
      panelBackground="translucent"
      appearance="dark"
    >
      <Flex
        style={{
          minHeight: "100vh",
          backgroundColor: "#e5e7eb",
          padding: "1rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            maxWidth: "800px",
            padding: "1.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <Flex
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {/* <Avatar>
              <Avatar.Image alt="Profile picture" src="/placeholder.svg?height=100&width=100" />
              <Avatar.Fallback>CS</Avatar.Fallback>
            </Avatar> */}
            <Text
              style={{
                marginTop: "1rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              John Doe
            </Text>
          </Flex>
          <Flex direction={"column"} gap={"2"}>
            <Text style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Personal Information
            </Text>
            <Text>Email: john.doe@example.com</Text>
            <Text>Phone: +1 (555) 123-4567</Text>
          </Flex>
          <Flex direction={"column"} gap={"2"} style={{ marginTop: "1rem" }}>
            <Text style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Enrolled Courses
            </Text>
            <Text>Introduction to Programming</Text>
            <Text>Web Development Fundamentals</Text>
          </Flex>
          <Flex style={{ justifyContent: "center", marginTop: "1.5rem" }}>
            <Button variant="solid">Edit Profile</Button>
          </Flex>
        </Card>
      </Flex>
    </Theme>
  );
};

export default ProfilePage;
