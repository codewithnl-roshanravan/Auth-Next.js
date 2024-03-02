import { redirect } from "next/navigation";
import { getSession } from "../../src/actions";
import Link from "next/link";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium users can see the content!</h1>
        <Link href="/profile">Go to the profile page to upgrade to premium</Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to the Premium Page</h1>
      <ul>
        <li>Mobile</li>
        <li>Accessories</li>
        <li>Airpods</li>
      </ul>
    </div>
  );
};

export default PremiumPage;
