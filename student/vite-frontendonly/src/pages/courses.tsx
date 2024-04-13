import "@radix-ui/themes/styles.css";
import { Card, Flex, Text, Button, Theme } from "@radix-ui/themes";

interface Course {
  id: number;
  name: string;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: "Introduction to Programming",
    description: "Learn the basics of programming with Python.",
  },
  {
    id: 2,
    name: "Web Development Fundamentals",
    description:
      "Build modern web applications with HTML, CSS, and JavaScript.",
  },
  {
    id: 3,
    name: "Data Structures and Algorithms",
    description: "Explore the fundamentals of data structures and algorithms.",
  },
];

const CoursesPage = () => {
  const handleEnroll = (courseId: number) => {
    console.log(`Enrolling in course with ID: ${courseId}`);
    // Add your enrollment logic here
  };

  return (
    <Theme
      accentColor="jade"
      radius="full"
      panelBackground="translucent"
      appearance="dark"
    >
      <div className="flex min-h-screen flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <div className="flex flex-col items-center justify-center flex-1">
          <Card className="mt-8 p-8" style={{ height: 700 }}>
            <Flex direction={"column"} gap={"5"}>
              <Flex direction={"column"}>
                <h1 className="text-3xl font-semibold">Available Courses</h1>
              </Flex>
              {courses.map((course) => (
                <Flex key={course.id} direction={"column"} gap={"1"}>
                  <Text size={"3"} className="font-semibold">
                    {course.name}
                  </Text>
                  <Text size={"3"}>{course.description}</Text>
                  <Flex justify={"end"}>
                    <Button
                      variant="soft"
                      onClick={() => handleEnroll(course.id)}
                    >
                      <Text size={"3"}>Enroll</Text>
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Card>
        </div>
      </div>
    </Theme>
  );
};

export default CoursesPage;
