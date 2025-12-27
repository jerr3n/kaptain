const methods = {
    gcode: "notify_gcode_response",
    subscription: 'notify_status_update',
    listChanged: "notify_filelist_changed",
    throttling: "notify_cpu_throttled",
    statistic: "notify_proc_stat_update",
    history: "notify_history_changed",
    sudo: "notify_sudo_alert",
    webcams: "notify_webcams_changed",
    user: {
        created: "notify_user_created",
        deleted: "notify_user_deleted",
        loggedout: "notify_user_logged_out",
    },
    manager: {
        response: "notify_update_response",
        refreshed: "notify_update_refreshed",
    },
    klippy: {
        ready: "notify_klippy_ready",
        shutdown: "notify_klippy_shutdown",
        disconnect: "notify_klippy_disconnect",
    },
    announcement: {
        update: "notify_announcement_update",
        dismissed: "notify_announcement_dismissed",
        wake: "notify_announcement_wake",
    },
    spoolman: {
        set: "notify_active_spool_set",
        changed: "notify_spoolman_status_changed",
    },
    server: {
        info: "server.info",
        config: "server.config",
        cached: {
            gcode: "server.gcode_store",
            temperature: "server.temperature_store",
        },
        rollover: "server.logs.rollover",
        restart: "server.restart",
        id: "server.connection.identify"
    },
    printer: {
        info: "printer.info",
        stop: "printer.emergency_stop",
        restart: "printer.restart",
        objects: {
            list: "printer.objects.list",
            query: "printer.objects.query",
            subscribe: "printer.objects.subscribe",
        },
        endstops: "printer.query_endstops.status",
        gcode: {
            run: "printer.gcode.script",
            help: "printer.gcode.help",
        },
        job: {
            start: "printer.print.start",
            pause: "printer.print.pause",
            resume: "printer.print.resume",
            cancel: "printer.print.cancel",
        }
    },
    system: {
        info: "machine.system_info",
        shutdown: "machine.shutdown",
        restart: "machine.reboot",
        service: {
            restart: "machine.services.restart",
            stop: "machine.services.stop",
            start: "machine.services.start",
        },
        stats: "machine.proc_stats",
        sudo: {
            password: "machine.sudo.password",
            info: "machine.sudo.info",
        },
        peripherals: {
            usb: "machine.peripherals.usb",
            serial: "machine.peripherals.serial",
            video: "machine.peripherals.video",
            canbus: "machine.peripherals.canbus",
        }
    },


}

export default methods;

//certain things in moonraker have certain parameter values

