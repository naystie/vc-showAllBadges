/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Nays
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ShowAllBadges",
    description: "Shows all profile badges without hiding any behind '+N'",
    authors: [Devs.Nays],
    tags: ["Appearance"],

    patches: [
        {
            find: '"UserProfileBadgeListRows"',
            replacement: {
                // the badge management experiment is what cuts the list to six and a +N
                match: /\(0,\i\.\i\)\(\{location:"UserProfileBadgeListRows"\}\)/,
                replace: "!1"
            }
        }
    ]
});
