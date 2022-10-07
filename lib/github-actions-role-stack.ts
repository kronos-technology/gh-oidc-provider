import { GitHubActionRole } from "cdk-pipelines-github";
import { App, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
export class GithubActionsRoleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const provider = new GitHubActionRole(this, "github-action-role", {
      repos: [
        "andersong9012/https://github.com/kronos-technology/data-platform.git",
      ],
    });
  }
}
