import { ESLintUtils } from "@typescript-eslint/utils";

export const operatorRule = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      UpdateExpression(node) {
        if (node.operator === "++") {
          context.report({
            node,
            messageId: "noInc",
          });
        }
      },
    };
  },
  meta: {
    type: "suggestion",
    messages: {
      noInc: "Use operator like i += 1",
    },
    schema: [],
  },
  defaultOptions: [],
});
