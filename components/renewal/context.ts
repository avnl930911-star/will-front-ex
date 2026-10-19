'use client';
import { createContext, useContext } from 'react';
export interface RenewalMessage { type: string; title?: string; message?: string; [key: string]: any }
export interface RenewalActions {
  state: { loggedIn: boolean; [key: string]: any };
  openModal: (message: RenewalMessage) => void;
  [key: string]: any;
}
export const RenewalContext = createContext<RenewalActions>({ state: { loggedIn: false }, openModal: () => {} });
export function useRenewalActions() { return useContext(RenewalContext); }
