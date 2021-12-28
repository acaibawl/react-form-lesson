export type Validation = {
  name: string;
  description: string;
  birthday: string;
  gender: string;
  address: {
    postalcode: string;
    refecture: string;
    city: string;
    restAddress: string;
  };
  college: {
    faculty: string;
  };
  careers: {
    company: string;
    position: string;
    startAt: string;
    endAt: string;
  }[];
};

export type ValidationState = {
  isStartValidation: boolean;
  message: Validation;
};
