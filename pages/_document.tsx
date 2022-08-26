import { createGetInitialProps } from "@mantine/next";
import Document from "next/document";

const getInitialProps = createGetInitialProps();

/**
 * https://nextjs.org/docs/advanced-features/custom-document
 */
export default class _Document extends Document {
  static getInitialProps = getInitialProps;
}
