<template>
<q-page>

    <q-stepper class="no-shadow" ref="stepper" :color="theme == 'dark' ? 'light' : 'dark'" dark>

        <q-step default title="Welcome">

           

            <div>Version: AeonLW v{{version}}-v{{daemonVersion}}</div>

            <h6 class="q-mb-md" style="font-weight: 300">Select Appearance:</h6>

            <q-btn-toggle
                v-model="choose_theme"
                toggle-color="primary"
                size="md"
                :options="[
                          {label: 'Light theme', value: 'light', icon: 'brightness_5'},
                          {label: 'Dark theme', value: 'dark', icon: 'brightness_2'},
                          ]"
                />


            <h6 class="q-mb-md" style="font-weight: 300">Select language:</h6>

            <q-btn-toggle
                v-model="choose_lang"
                toggle-color="primary"
                size="md"
                :options="[
                          {label: 'English', value: 'EN', icon: 'language'},
                          ]"
                />

            <p class="q-mt-md">More languages When You Contribute!</p>

        </q-step>

        <q-step title="Configure">

            <SettingsGeneral ref="settingsGeneral"></SettingsGeneral>

        </q-step>

        <q-step title="Review">

            <h2 class="q-mt-none q-mb-none text-weight-thin">You're almost set!</h2>

            <h6 class="q-mb-md q-mt-md" style="font-weight: 300">Review settings:</h6>

            <p>You are using a
                <template v-if="pending_config.daemon.type == 'local'">
                    <code>local node</code>
                </template>
                <template v-if="pending_config.daemon.type == 'local_remote'">
                    <code>local + remote node</code>
                </template>
                <template v-if="pending_config.daemon.type == 'remote'">
                    <code>remote node</code>
                </template>
                <template v-if="pending_config.app.testnet">
                    <code>on testnet</code>
                </template>
                and will store data in
                <code>{{ pending_config.app.data_dir }}</code>
            </p>

            <p>Press next to sync with the Aeon network!</p>

        </q-step>

    </q-stepper>

    <q-layout-footer class="no-shadow q-pa-sm">
        <div class="row justify-end">
            <div>
	        <q-btn
	            flat
	            @click="clickPrev()"
	            label="Back"
	            />
            </div>
            <div>
	        <q-btn
                    class="q-ml-sm"
                    color="primary"
	            @click="clickNext()"
	            label="Next"
	            />
            </div>
        </div>

    </q-layout-footer>

</q-page>
</template>

<script>
import { version, daemonVersion } from "../../../package.json"
import { mapState } from "vuex"
import SettingsGeneral from "components/settings_general"
export default {
    computed: mapState({
        theme: state => state.gateway.app.config.appearance.theme,
        pending_config: state => state.gateway.app.pending_config
    }),
    data() {
        return {
            choose_theme: "light",
            choose_lang: "EN",
            version: "",
            daemonVersion: ""
        }
    },
    watch: {
        choose_theme: function (val) {
            this.$store.commit("gateway/set_app_data", {
                config: {
                    appearance: {
                        theme: val
                    }
                }
            });
        }
    },
    mounted () {

        this.version = version
        this.daemonVersion = daemonVersion

        // set add status back to 2
        this.$store.commit("gateway/set_app_data", {
            status: {
                code: 2 // Loading config
            }
        });
    },
    methods: {
        clickNext () {
            if(this.$refs.stepper.steps[this.$refs.stepper.length-1].active) {
                this.$gateway.send("core", "save_config_init", this.pending_config);
                this.$router.replace({ path: "/" });
            } else {
                this.$refs.stepper.next();
            }
        },
        clickPrev () {
            this.$refs.stepper.previous();
        },
    },
    components: {
        SettingsGeneral
    }
}
</script>

<style lang="scss">

.language-item {

    padding: 10px 30px 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;


    .language-item-circle {
        background: #cc90e2;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        display: inline-block;
        line-height: 50px;
        text-align:center;
        color: white;
        margin-right: 10px;
    }
}

.q-stepper-header {
    min-height: 50px;

    .q-stepper-tab {
        padding-top: 0;
        padding-bottom: 0;
    }

}
</style>
