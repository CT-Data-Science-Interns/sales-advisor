import userProfile from "@/data/user/profile.json";
import type { UserProfile } from "@/types/user/profile";
import UserProfilePageContent from "./components/content";

export interface UserProfilePageData {
  userProfile: UserProfile;
}

async function getData() {
  return { userProfile } as UserProfilePageData;
}

export default async function UsersListPage() {
  return <UserProfilePageContent {...await getData()} />;
}
