export namespace _ {
  export type state = AuthStoreProps.auth;
}

export default _;

export namespace AuthStoreProps {
  export type auth = {
    activated: boolean;
  };
}
