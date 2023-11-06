import { CallEffect, PutEffect } from 'redux-saga/effects';
import { SET_ORG } from '../model/orgReducer';

export interface IOrganizationRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export interface IOrganization {
  name: string;
  repos: IOrganizationRepo[];
  error: boolean;
  page: number;
}

export interface IActionSetOrg {
  type: typeof SET_ORG;
  payload: IOrganization;
}

export type TActions = IActionSetOrg;

export type PayloadSetOrg = {
  name: string;
  error: boolean;
  page: number;
  repos?: IOrganizationRepo[];
};

export type GeneratorFetchOrg = Generator<
  | CallEffect<IOrganizationRepo[]>
  | PutEffect<{
      type: string;
      payload: PayloadSetOrg;
    }>,
  void,
  IOrganizationRepo[]
>;
