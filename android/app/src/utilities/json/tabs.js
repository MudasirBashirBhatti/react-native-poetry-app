import CategoryIcon from '../../assets/icons/CategoryIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import CopyIcon from '../../assets/icons/CopyIcon'
import { colors } from '../colors'
import WriterIcon from '../../assets/icons/WriterIcon'
import PenIcon from '../../assets/icons/PenIcon'
import WritingPen from '../../assets/icons/WritingPen'
import StarIcon from '../../assets/icons/StarIcon'
import TodayIcon from '../../assets/icons/TodayIcon'

export const headerTabs = [
    {
        tabComp: <CategoryIcon fill={colors.primaryClr} />,
        screen: 'Home',
    },
    {
        tabComp: <HeartIcon fill={colors.primaryClr} />,
        screen: 'Favourite',
    },
    {
        tabComp: <TodayIcon fill={colors.primaryClr} />,
        screen: 'TodayPoetry',
    },
]

export const homeTab = [
    {
        title: 'موضوعات',
        // icon: <PenIcon />,
        icon: <WritingPen />,
        tabComp: <CategoryIcon fill={colors.primaryClr} />,
    },
    {
        title: 'شاعر',
        icon: <WriterIcon />,
        tabComp: <HeartIcon fill={colors.primaryClr} />,
    },
]

export const specificCategory = [
    {
        title: 'موضوعات',
        // icon: <PenIcon />,
        icon: <WritingPen />,
        tabComp: <CategoryIcon fill={colors.primaryClr} />,
    },
    {
        title: 'شاعر',
        icon: <WriterIcon />,
        tabComp: <HeartIcon fill={colors.primaryClr} />,
    },
]