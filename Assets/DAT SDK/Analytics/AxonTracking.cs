using UnityEngine;

public static class AxonTracking
{
    public enum AxonEvent {
        CHALLENGE_STARTED,
        CHALLENGE_PASS25,
        CHALLENGE_PASS50,
        CHALLENGE_PASS75,
        CHALLENGE_FAILED,
        CHALLENGE_SOLVED,
        CHALLENGE_RETRY,
    }
    public static void TrackEvent(AxonEvent axonEvent)
    {
        switch (axonEvent)
        {
            case AxonEvent.CHALLENGE_STARTED:
                Luna.Unity.Analytics.Applovin.LogChallengeStarted();
                break;
            case AxonEvent.CHALLENGE_PASS25:
                Luna.Unity.Analytics.Applovin.LogChallengePass25();
                break;
            case AxonEvent.CHALLENGE_PASS50:
                Luna.Unity.Analytics.Applovin.LogChallengePass50();
                break;
            case AxonEvent.CHALLENGE_PASS75:
                Luna.Unity.Analytics.Applovin.LogChallengePass75();
                break;
            case AxonEvent.CHALLENGE_FAILED:
                Luna.Unity.Analytics.Applovin.LogChallengeFailed();
                break;
            case AxonEvent.CHALLENGE_SOLVED:
                Luna.Unity.Analytics.Applovin.LogChallengeSolved();
                break;
            case AxonEvent.CHALLENGE_RETRY:
                Luna.Unity.Analytics.Applovin.LogChallengeRetry();
                break;
            default:
                break;
        }
    }
}
