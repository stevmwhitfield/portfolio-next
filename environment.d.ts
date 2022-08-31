declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_FORM: string;
        }
    }
}

export {}