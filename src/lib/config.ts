export const siteConfig = {
    github: {
        link: "https://github.com/rhyn0/match-bets-next",
    },
    metadata: {
        title: {
            default: "Match Predictions",
            template: "%s | Match Predictions",
        },
        description: "Predict scores for matches within your group.",
    },
} as const;

export type SiteConfigType = typeof siteConfig;
