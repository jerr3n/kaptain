import methods from "@/util/drax/enum"
import {metadata} from "@/app/layout";


type deviceOptions = "on"|"off"|"toggle"
type params = {
    /**
     * Server
     * https://moonraker.readthedocs.io/en/latest/external_api/server/
     */
    [methods.server.info]: undefined;
    [methods.server.config]: undefined;
    [methods.server.restart]: undefined;
    [methods.server.cached.temperature]: {include_monitors?: boolean};
    [methods.server.cached.gcode]: {count?: number};
    [methods.server.rollover]: {application?: string};
    [methods.server.id]: {
        client_name: string;
        version: number;
        type: "web"|"mobile"|"desktop"|"display"|"bot"|"agent"|"other";
        url: string;
        access_token?: string;
        api_key?: string;
    }
    /**
     * Printer
     * https://moonraker.readthedocs.io/en/latest/external_api/printer/
     */
    [methods.printer.info]: undefined;
    [methods.printer.stop]: undefined;
    [methods.printer.restart]: undefined;
    [methods.printer.firmwareRestart]: undefined;
    [methods.printer.objects.list]: undefined;
    [methods.printer.endstops]: undefined;
    [methods.printer.gcode.run]: {script: string}
    [methods.printer.gcode.help]: undefined;
    [methods.printer.job.start]: {filename: string }
    [methods.printer.job.cancel]: undefined;
    [methods.printer.job.pause]: undefined;
    [methods.printer.job.resume]: undefined;
    /**
     * System
     * https://moonraker.readthedocs.io/en/latest/external_api/machine/
     */
    [methods.system.info]: undefined;
    [methods.system.shutdown]: undefined;
    [methods.system.restart]: undefined;
    [methods.system.service.restart]: {service: string};
    [methods.system.service.start]: {service: string};
    [methods.system.service.stop]: {service: string};
    [methods.system.stats]: undefined;
    [methods.system.sudo.info]: {check_access?: boolean};
    [methods.system.sudo.password]: {password: string};
    [methods.system.peripherals.usb]: undefined;
    [methods.system.peripherals.canbus]: undefined;
    [methods.system.peripherals.serial]: undefined;
    [methods.system.peripherals.video]: undefined;
    /**
     * File mgmt
     * https://moonraker.readthedocs.io/en/latest/external_api/file_manager/
     */
    [methods.files.list.files]: {root?: string};
    [methods.files.list.roots]: undefined;
    [methods.files.metadata.get]: {filename: string};
    [methods.files.metadata.scan]: {filename: string};
    [methods.files.metadata.thumbnail]: {filename: string};
    [methods.files.directory.get]: {path?: string; extended?: boolean};
    [methods.files.directory.create]: {path: string};
    [methods.files.directory.delete]: {path: string; force?: boolean};
    [methods.files.files.move]: {source: string; dest: string};
    [methods.files.files.copy]: {source: string; dest: string};
    [methods.files.files.zip]: {dest?: string; items: string[]; store_only?: boolean};
    /**
     * Auth
     * https://moonraker.readthedocs.io/en/latest/external_api/authorization/
     */
    [methods.auth.login]: {username: string; password: string; source?: string};
    [methods.auth.logout]: undefined;
    [methods.auth.user.current]: undefined;
    [methods.auth.manage.create]: {username: string; password: string};
    [methods.auth.manage.delete]: {username: string};
    [methods.auth.list]: undefined;
    [methods.auth.manage.resetPassword]: {password: string; new_password: string};
    [methods.auth.manage.refreshJWT]: {refresh_token: string};
    [methods.auth.manage.oneshot]: undefined;
    [methods.auth.information]: undefined;
    [methods.auth.manage.apikey.get]: undefined;
    [methods.auth.manage.apikey.generate]: undefined;
    /**
     * Database
     * https://moonraker.readthedocs.io/en/latest/external_api/database/
     */
    [methods.database.info]: undefined;
    [methods.database.item.get]: {namespace: string;key?:string|string[]};
    [methods.database.item.create]: {namespace: string;key:string|string[];value:any};
    [methods.database.item.delete]: {namespace: string;key:string|string[]};
    [methods.database.manage.compact]: undefined;
    [methods.database.manage.backup.backup]: {filename?: string};
    [methods.database.manage.backup.delete]: {filename: string};
    [methods.database.manage.backup.restore]: {filename: string};
    //debug
    [methods.database.DEBUG.list]: undefined;
    [methods.database.DEBUG.get]: {namespace: string;key?:string|string[]};
    [methods.database.DEBUG.create]: {namespace: string;key:string|string[];value:any};
    [methods.database.DEBUG.delete]: {filename: string};
    [methods.database.DEBUG.fetchTable]: {table: string};
    /**
     * Job Queue & Job History
     * https://moonraker.readthedocs.io/en/latest/external_api/job_queue/
     */
    [methods.job.queue.status]: undefined;
    [methods.job.manage.create]: {filenames: string[]};
    [methods.job.manage.delete]: {job_ids: string[], all?:boolean}; //im not sure? docs say this isnt right
    [methods.job.queue.pause]: undefined;
    [methods.job.queue.start]: undefined;
    [methods.job.queue.jump]: {job_id: string};
    /**
     * https://moonraker.readthedocs.io/en/latest/external_api/history/
     */
    [methods.job.history.getList]: {limit?: number, start?: number, before?: number|undefined, since?:number|undefined,order:"asc"|"desc"};
    [methods.job.history.totals.get]: undefined;
    [methods.job.history.totals.reset]: undefined;
    [methods.job.history.job.get]: {uid: string};
    [methods.job.history.job.delete]: {uid: string};
    /**
     * Announcements
     * https://moonraker.readthedocs.io/en/latest/external_api/announcements/
     */
    [methods.announcement.list]: {include_dismissed?: boolean};
    [methods.announcement.update]: undefined;
    [methods.announcement.dismiss]: {entry_id: string, wake_time?: number|null};
    [methods.announcement.feeds.get] : undefined;
    [methods.announcement.feeds.subscribe]: {name: string};
    [methods.announcement.feeds.remove]: {name: string};
    /**
     * Webcam
     * https://moonraker.readthedocs.io/en/latest/external_api/webcams/
     */
    [methods.webcam.list]: undefined;
    [methods.webcam.individual.get]: {uid: string}; // no name, name is dep
    [methods.webcam.individual.delete]: {uid: string};
    [methods.webcam.individual.test]: {uid: string};
    [methods.webcam.individual.post]: {
        uid?: string;
        name: string;
        location?: string;
        icon?: string;
        enabled?: boolean;
        service?: string;
        target_fps?: number;
        target_fps_idle?: number;
        stream_url: string;
        snapshot_url?: string;
        flip_vertical?: boolean;
        flip_horizontal?: boolean;
        rotation?: number;
        aspect_ratio?: string;
        extra_data?: object;
    }
    /**
     * Update mgmt
     * https://moonraker.readthedocs.io/en/latest/external_api/update_manager/
     */
    [methods.update.status.get]: undefined;
    [methods.update.status.refresh]: {name: string};
    [methods.update.upgrade]: {name: string};
    [methods.update.recover]: {name: string; hard?:boolean};
    [methods.update.rollback]: {name: string;};

    /**
     * Devices
     * https://moonraker.readthedocs.io/en/latest/external_api/devices/
     */
    [methods.devices.power.list]: undefined;
    [methods.devices.power.state.get]: {device: string};
    [methods.devices.power.state.set]: {device: string, action: deviceOptions}
    //oh my god what on gods green earth is that
    [methods.devices.power.batch.get]: {[name: string]: null}
    [methods.devices.power.batch.off]: {[name: string]: null}
    [methods.devices.power.batch.on]: {[name: string]: null}
    [methods.devices.wled.list]: undefined;
    [methods.devices.wled.status]: {[device: string]: null}
    [methods.devices.wled.on]: {[device: string]: null}
    [methods.devices.wled.off]: {[device: string]: null}
    // TODO [machine.devices.wled.status] = {}
    [methods.devices.sensor.list]: {extended?: boolean};
    [methods.devices.sensor.info]: {sensor: string, extended?: boolean};
    [methods.devices.sensor.get.single]: {sensor: string}
    [methods.devices.sensor.get.batch]: undefined;
}