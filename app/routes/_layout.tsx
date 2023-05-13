import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/mui";
import { Outlet } from "@remix-run/react";

import { AppIcon } from "@components/app-icon";
import { Header } from "@components/header";

export default function BaseLayout() {
  return (
    <>
      <ThemedLayoutV2
        Header={() => <Header sticky />}
        Title={({ collapsed }) => (
          <ThemedTitleV2
            collapsed={collapsed}
            text="refine Project"
            icon={<AppIcon />}
          />
        )}
      >
        <Outlet />
      </ThemedLayoutV2>
    </>
  );
}
