/* eslint-disable */
import { agent, token } from "./shared/shared"

describe("User Sign up", () => {
    it('user profile', async () => {
        const res = await agent.get("/user").set('Authorization', 'Bearer ' + token)
    });
});
