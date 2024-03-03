import "@radix-ui/themes/styles.css";
import { Card, Flex, Button, Theme } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

type InvoiceType = {
  id: number;
  reference: string;
  amount: number;
  dueDate: string;
  type: string;
  studentId: string;
  status: string;
};

export default function InvoiceDetail() {
  let { invoiceid } = useParams();

  const [invoiceData, setInvoiceData] = useState<InvoiceType>(
    {
      id: 0,
      reference: "",
      amount: 0,
      dueDate: "",
      type: "",
      studentId: "",
      status: "",
    } || undefined
  );

  useEffect(() => {
    fetch(`http://localhost:8081/invoices/reference/${invoiceid}`)
      .then((response) => response.json())
      .then((data) => setInvoiceData(data));
  }, []);

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
              <Flex direction={"column"} align="center">
                <h1 className="text-2xl font-semibold">Invoice</h1>
              </Flex>
              <Flex direction="row" gap="9" justify="between">
                <Flex>
                  <h2>Reference : </h2>
                </Flex>
                <Flex>
                  <h2>{invoiceData.reference}</h2>
                </Flex>
              </Flex>
              <Flex direction="row" gap="9" justify="between">
                <Flex>
                  <h2>Student ID : </h2>
                </Flex>
                <Flex>
                  <h2>{invoiceData.studentId}</h2>
                </Flex>
              </Flex>
              <Flex direction="row" gap="9" justify="between">
                <Flex>
                  <h2>Amount : </h2>
                </Flex>
                <Flex>
                  <h2>{invoiceData.amount}</h2>
                </Flex>
              </Flex>
              <Flex direction="row" gap="9" justify="between">
                <Flex>
                  <h2>Due Date : </h2>
                </Flex>
                <Flex>
                  <h2>{invoiceData.dueDate}</h2>
                </Flex>
              </Flex>
              <Flex direction="row" gap="9" justify="between">
                <Flex>
                  <h2>Type : </h2>
                </Flex>
                <Flex>
                  <h2>{invoiceData.type}</h2>
                </Flex>
              </Flex>
              <Flex direction="row" gap="9" justify="between">
                <Flex>
                  <h2>Status : </h2>
                </Flex>
                <Flex>
                  <h2>{invoiceData.status}</h2>
                </Flex>
              </Flex>
              <Flex
                gap="2"
                className="place-content-end gap-2"
                justify="center"
              >
                <Button
                  variant="solid"
                  size="2"
                  color="plum"
                  onClick={() => toast.success("Invoice Paid.")}
                >
                  <span className="text-lg p-4">Pay</span>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </div>
      </div>
      <Toaster />
    </Theme>
  );
}
