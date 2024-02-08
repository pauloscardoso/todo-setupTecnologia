declare module '*.png';
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

type _UnionKeys<T> = T extends T ? keyof T : never;
type _StrictUnionHelper<T, TAll> = T extends any ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>> : never;

namespace GlobalProps {
  export type all = any;
  export type error = any;

  type elementChild<T = unknown> = {
    children: ((e?: any) => React.ReactChild[]) | React.ReactChild[];
  } & T;

  type extractPropertyObject<T, E = ''> = {
    [K in keyof T]: T[K] extends E ? K : E extends '' ? K : never;
  }[keyof T];

  type partialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };

  type noUndefinedField<T> = { [P in keyof T]-?: noUndefinedField<NonNullable<T[P]>> }; // retira o condicional

  type StrictUnion<T> = StrictUnionHelper<T, T>; // Definir um tipo de tipagem com base em uma variável, ex: type='current' | type='history'
}
