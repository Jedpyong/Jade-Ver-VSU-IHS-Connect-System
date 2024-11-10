import { where, orderBy } from "firebase/firestore";

import type { Result } from "../results/result";
import { FailedResult } from "../results/failedResult";
import { SuccessfulResult } from "../results/successfulResult";
import { FirebaseStorage } from "./firebaseStorage";
import { FirebaseDatabase } from "./firebaseDatabase";

export class Databases {
    private static readonly _userFirebaseDatabase: FirebaseDatabase = new FirebaseDatabase('user');

    private static readonly _adminFirebaseDatabase: FirebaseDatabase = new FirebaseDatabase('admin');

    private static readonly _adviserFirebaseDatabase: FirebaseDatabase = new FirebaseDatabase('adviser');

    private static readonly _studentFirebaseDatabase: FirebaseDatabase = new FirebaseDatabase('student');

    private static readonly _sectionFirebaseDatabase: FirebaseDatabase = new FirebaseDatabase('section');

    private static readonly _timelineFirebaseDatabase: FirebaseDatabase = new FirebaseDatabase('timeline');

    private static readonly _userIconsFirebaseStorage: FirebaseStorage = new FirebaseStorage('users/icons');

    private static readonly _incidentalReportsFirebaseStorage: FirebaseStorage = new FirebaseStorage('reports/incidents');

    private static readonly _anecdotalReportsFirebaseStorage: FirebaseStorage = new FirebaseStorage('reports/anecdotals');

    private static readonly _caseConferenceFirebaseStorage: FirebaseStorage = new FirebaseStorage('reports/caseConferences');

    public static get userFirebaseDatabase(): FirebaseDatabase {
        return Databases._userFirebaseDatabase;
    }

    public static get adviserFirebaseDatabase(): FirebaseDatabase {
        return Databases._adviserFirebaseDatabase;
    }

    public static get studentFirebaseDatabase(): FirebaseDatabase {
        return Databases._studentFirebaseDatabase;
    }

    public static get sectionFirebaseDatabase(): FirebaseDatabase {
        return Databases._sectionFirebaseDatabase;
    }

    public static get adminFirebaseDatabase(): FirebaseDatabase {
        return Databases._adminFirebaseDatabase;
    }

    public static get timelineFirebaseDatabase(): FirebaseDatabase {
        return Databases._timelineFirebaseDatabase;
    }

    public static get userIconsFirebaseStorage(): FirebaseStorage {
        return Databases._userIconsFirebaseStorage;
    }

    public static get incidentalReportsFirebaseStorage(): FirebaseStorage {
        return Databases._incidentalReportsFirebaseStorage;
    }

    public static get anecdotalReportsFirebaseStorage(): FirebaseStorage {
        return Databases._anecdotalReportsFirebaseStorage;
    }

    public static get caseConferenceFirebaseStorage(): FirebaseStorage {
        return Databases._caseConferenceFirebaseStorage;
    }

    public static async createOneSection(id: string, name: string, level: number, schoolYear: string): Promise<Result> {
        try {
            let result: Result = await Databases._sectionFirebaseDatabase.createOneDocumentWithId(id, {
                name, level, schoolYear
            });
            console.log(result);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllSections(): Promise<Result> {
        try {
            const result: Result = await Databases._sectionFirebaseDatabase.queryDuplicates();
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneSectionViaName(name: string): Promise<Result> {
        try {
            const result: Result = await Databases._adminFirebaseDatabase.queryOne(
                where("name", "==", name)
            );
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneSectionViaId(id: string): Promise<Result> {
        try {
            const result: Result = await Databases._sectionFirebaseDatabase.queryOne(
                where("id", "==", id)
            );
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async deleteOneSectionViaId(id: string): Promise<Result> {
        try {
            const result: Result = await Databases._sectionFirebaseDatabase.deleteOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getMostRecentTimeline(): Promise<Result> {
        try {
            let result: Result = await Databases._timelineFirebaseDatabase.queryOne(
                [orderBy('schoolYear', 'desc'), orderBy('semester', 'desc')]
            );
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async deleteAdviserViaId(id: string): Promise<Result> {
        try {
            let result: Result = await Databases._adviserFirebaseDatabase.deleteOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllUsers(): Promise<Result> {
        try {
            const result: Result = await Databases._userFirebaseDatabase.queryUniques();
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneUserViaEmail(email: string): Promise<Result> {
        try {
            const result: Result = await Databases._userFirebaseDatabase.queryOne(
                where("email", "==", email)
            );
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneUserViaId(id: string): Promise<Result> {
        try {
            const result: Result = await Databases._userFirebaseDatabase.readOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async updateOneUserViaId(id: string, values: any): Promise<Result> {
        try {
            let result: Result = await Databases._userFirebaseDatabase.updateOneDocument(id, values);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async deleteOneUserViaId(id: string): Promise<Result> {
        try {
            let result: Result = await Databases._userFirebaseDatabase.deleteOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllAdvisers(): Promise<Result> {
        try {
            const result: Result = await Databases._adviserFirebaseDatabase.queryDuplicates();
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneAdviserViaUserId(userId: string): Promise<Result> {
        try {
            const result: Result = await Databases._adviserFirebaseDatabase.queryOne(
                where("userId", "==", userId)
            );
            if (result.data === undefined) {
                throw new Error(`User does not have an 'Adviser' account`);
            }
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async updateOneAdviserViaId(id: string, values: any): Promise<Result> {
        try {
            let result: Result = await Databases._adviserFirebaseDatabase.updateOneDocument(id, values);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async deleteOneAdviserViaId(id: string): Promise<Result> {
        try {
            let result: Result = await Databases._adviserFirebaseDatabase.deleteOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllStudents(): Promise<Result> {
        try {
            const result: Result = await Databases._studentFirebaseDatabase.queryDuplicates();
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneStudentViaId(id: string): Promise<Result> {
        try {
            const result: Result = await Databases._studentFirebaseDatabase.readOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async updateOneStudentViaId(id: string, values: any): Promise<Result> {
        try {
            const result: Result = await Databases._studentFirebaseDatabase.updateOneDocument(id, values);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async deleteOneStudentViaId(id: string): Promise<Result> {
        try {
            const result: Result = await Databases._studentFirebaseDatabase.deleteOneDocument(id);
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getOneAdminViaUserId(userId: string): Promise<Result> {
        try {
            const result: Result = await Databases._adminFirebaseDatabase.queryOne(
                where("userId", "==", userId)
            );
            if (result.data === undefined) {
                throw new Error(`User does not have an 'Admin' account`);
            }
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllStudentsCount(): Promise<Result> {
        try {
            const result: Result = await Databases._adminFirebaseDatabase.countCollectionDocuments('student')
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllAdminReportsCount(adminId: string): Promise<Result> {
        try {
            const anecdotalReportResult: Result = await Databases._adminFirebaseDatabase.countCollectionDocuments('anecdotalReport',
                where("adminId", "==", adminId)
            );
            if (anecdotalReportResult.isNotSuccessful) {
                throw new Error(anecdotalReportResult.message);
            }
            const incidentalReportResult: Result = await Databases._adminFirebaseDatabase.countCollectionDocuments('incidentReport',
                where("adminId", "==", adminId)
            );
            if (incidentalReportResult.isNotSuccessful) {
                throw new Error(incidentalReportResult.message);
            }
            return new SuccessfulResult(anecdotalReportResult.data + incidentalReportResult.data);

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }

    public static async getAllPendingAdvisersCount(): Promise<Result> {
        try {
            const result: Result = await Databases._adminFirebaseDatabase.countCollectionDocuments('adviser',
                where("status", "==", "pending")
            );
            return result;

        } catch (error: any) {
            return new FailedResult(error.message);
        }
    }
}
