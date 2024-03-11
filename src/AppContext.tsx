import React, { createContext, useContext, useState } from 'react';


export interface AppContext {
  config: any;
}

export const initialState: AppContext = {
  config: '',
};

export interface UpdateAppContext {
  setConfig: (value: any) => void;
}

const GlobalContext = createContext<AppContext>(initialState);

const UpdateGlobalContext = createContext<UpdateAppContext>({
  setConfig: (_value: any) => {
    return;
  },
});

export function GlobalProvider({ children }: { children?: React.ReactChild | React.ReactChild[] }) {
  const [config, setConfig] = useState<any>(initialState.config);

  return (
    <GlobalContext.Provider
      value={{
        config,
      }}
    >
      <UpdateGlobalContext.Provider
        value={{
          setConfig,
        }}
      >
        {children}
      </UpdateGlobalContext.Provider>
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const globalContext = useContext(GlobalContext);
  const updateGlobalContext = useContext(UpdateGlobalContext);

  return {
    ...globalContext,
    ...updateGlobalContext,
  };
}
