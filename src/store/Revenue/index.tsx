import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getEntries } from "../../services/api";

const INITIAL_STATE = {
  data: [] as any[],
  loaded: true,
  error: false,
  page: 1
};

const RevenueContext = createContext({});

type Props = {
  children: ReactNode;
};

const RevenueProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = (payload: any) =>
    setState((state: any) => ({ ...state, ...payload }));

  const providerValue = { state, setState: updateState };

  useEffect(() => {
    (async () => {
      try {
        updateState({ loaded: false });
        const { data } = await getEntries();
        updateState({ data });
      } catch (error) {
        console.error(error);
        updateState({ error: true });
      } finally {
        updateState({ loaded: true });
      }
    })();
  }, []); //eslint-disable-line

  return (
    <RevenueContext.Provider value={providerValue}>
      {children}
    </RevenueContext.Provider>
  );
};

export { RevenueContext, RevenueProvider };
