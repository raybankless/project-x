import React, { createContext, useContext, useState } from 'react';

export interface AppContext {
  user: any;
}

export const initialState: AppContext = {
  user: {},
};

export interface UpdateAppContext {
  setUser: (value: any) => void;
}

const AuthContext = createContext<AppContext>(initialState);

const UpdateAuthContext = createContext<UpdateAppContext>({
  setUser: (_value: any) => {
    return;
  },
});

export function AuthProvider({ children }: { children?: React.ReactChild | React.ReactChild[] }) {
  const [user, setUser] = useState<any>(initialState.user);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      <UpdateAuthContext.Provider
        value={{
          setUser,
        }}
      >
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const authContext = useContext(AuthContext);
  const updateAuthContext = useContext(UpdateAuthContext);

  return {
    ...authContext,
    ...updateAuthContext,
  };
}
