import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relativeTime);

interface formatOption {
    format?: string;
    isUtc?: boolean;
}

export class TimeFormat {
    /**
     * 获取系统时间
     * @param { String } format 必填|要求返回的格式
     */
    static getSystemTime(format = 'YYYY-MM-DD HH:mm:ss') {
        return dayjs().format(format);
    }

    /**
     * 调整时间格式
     * @param { Date|String } value 必填|时间
     * @param { String } format 必填|要求返回的格式
     * @param { boolean } isUtc 必填|是否是UTC时间
     */
    static getExpectFormat(value: string, options: formatOption) {
        const { format = 'YYYY-MM-DD HH:mm:ss', isUtc = false } = options;
        if (value) {
            if (isUtc) return dayjs.utc(value).format(format);
            return dayjs(value).format(format);
        }
    }

    static fromNow(value: string, options: formatOption) {
        const { format = 'YYYY-MM-DD HH:mm:ss', isUtc = false } = options;

        if (value) {
            if (isUtc) return dayjs(dayjs.utc(value).format(format)).fromNow();
            return dayjs(value).fromNow();
        }
    }
}
