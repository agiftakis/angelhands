import React from "react";
import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#16423c", // This will set the primary color for all Ant Design components to black
          // You can also adjust borderRadius, colorTextBase, etc.
          borderRadius:2,
          controlOutline:'none',
        },
        components: {
          Button: {
            controlHeight: 45,
            defaultBorderColor:"#16423c",
            //paddingInline: 10,
            
          },
          Select: {
            controlHeight: 35,
          },
          Input: {
            controlHeight: 35,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
