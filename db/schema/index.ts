import * as authUsers from "./auth/users";
import * as dataResult from "./data/result";
import * as dataSchedule from "./data/schedule";
import * as dataTeams from "./data/teams";
import * as userInputPredictions from "./user-input/user-predictions";

const combinedSchema = {
    ...authUsers,
    ...dataResult,
    ...dataSchedule,
    ...dataTeams,
    ...userInputPredictions,
};
export default combinedSchema;
