
import { GitHubUser } from '../types';

/**
 * Fetches a GitHub user profile by username.
 * @param username The GitHub username to search for.
 * @returns A promise that resolves to the GitHubUser object.
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data as GitHubUser;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}
