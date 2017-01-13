import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // Auth data.
        user: false,
        authModal: false,

        // Note data
        viewNote: false,
        selectedNote: '',
        notes: [
                {
                    id: 1,
                    content: "Kogi tbh venmo, tilde flannel wayfarers etsy. Hammock marfa swag humblebrag tote bag. Kogi tbh venmo, tilde flannel wayfarers etsy. Hammock marfa swag humblebrag tote bag.",
                    tag: "Tech"
                },
                {
                    id: 2,
                    content: "Deep v whatever cliche, keytar 8-bit vexillologist lo-fi everyday carry cornhole. Deep v whatever cliche, keytar 8-bit vexillologist lo-fi everyday carry cornhole.",
                    tag: "Writing"
                },
                {
                    id: 3,
                    content: "Air plant locavore occupy tousled. Post-ironic fashion axe leggings meggings franzen. Air plant locavore occupy tousled. Post-ironic fashion axe leggings meggings franzen",
                    tag: "Quotes"
                },
                {
                    id: 4,
                    content: "Try-hard brooklyn blue bottle, stumptown tilde coloring book direct trade biodiesel cronut bushwick.",
                    tag: "Tech"
                },
                {
                    id: 5,
                    content: "Deep v whatever cliche, keytar 8-bit vexillologist lo-fi everyday carry cornhole.",
                    tag: "Writing"
                },
                {
                    id: 6,
                    content: "Try-hard brooklyn blue bottle, stumptown tilde coloring book direct trade biodiesel cronut bushwick.",
                    tag: "Tech"
                },
                {
                    id: 7,
                    content: "Kogi tbh venmo, tilde flannel wayfarers etsy. Hammock marfa swag humblebrag tote bag.",
                    tag: "Tech"
                }
            ]
    }
});