import { Card } from "@/components/ui/card";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const users = [
    {
      "username": "user_1",
      "email": "user_1@mail.com",
      "branch": "Aerospace",
      "role": "User"
    },
    {
      "username": "user_2",
      "email": "user_2@webmail.org",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_3",
      "email": "user_3@mail.com",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_4",
      "email": "user_4@email.net",
      "branch": "Biomedical",
      "role": "Admin"
    },
    {
      "username": "user_5",
      "email": "user_5@webmail.org",
      "branch": "Aerospace",
      "role": "User"
    },
    {
      "username": "user_6",
      "email": "user_6@mail.com",
      "branch": "Civil",
      "role": "Viewer"
    },
    {
      "username": "user_7",
      "email": "user_7@mail.com",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_8",
      "email": "user_8@email.net",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_9",
      "email": "user_9@example.com",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_10",
      "email": "user_10@webmail.org",
      "branch": "Biomedical",
      "role": "Moderator"
    },
    {
      "username": "user_11",
      "email": "user_11@example.com",
      "branch": "Mechanical",
      "role": "Admin"
    },
    {
      "username": "user_12",
      "email": "user_12@example.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_13",
      "email": "user_13@example.com",
      "branch": "Information Technology",
      "role": "Viewer"
    },
    {
      "username": "user_14",
      "email": "user_14@mail.com",
      "branch": "Computer Science",
      "role": "Moderator"
    },
    {
      "username": "user_15",
      "email": "user_15@mail.com",
      "branch": "Aerospace",
      "role": "User"
    },
    {
      "username": "user_16",
      "email": "user_16@example.com",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_17",
      "email": "user_17@mail.com",
      "branch": "Aerospace",
      "role": "Viewer"
    },
    {
      "username": "user_18",
      "email": "user_18@email.net",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_19",
      "email": "user_19@webmail.org",
      "branch": "Civil",
      "role": "User"
    },
    {
      "username": "user_20",
      "email": "user_20@example.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_21",
      "email": "user_21@webmail.org",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_22",
      "email": "user_22@mail.com",
      "branch": "Mechanical",
      "role": "Moderator"
    },
    {
      "username": "user_23",
      "email": "user_23@example.com",
      "branch": "Electrical",
      "role": "Viewer"
    },
    {
      "username": "user_24",
      "email": "user_24@mail.com",
      "branch": "Biomedical",
      "role": "Admin"
    },
    {
      "username": "user_25",
      "email": "user_25@webmail.org",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_26",
      "email": "user_26@webmail.org",
      "branch": "Computer Science",
      "role": "Moderator"
    },
    {
      "username": "user_27",
      "email": "user_27@mail.com",
      "branch": "Civil",
      "role": "Viewer"
    },
    {
      "username": "user_28",
      "email": "user_28@webmail.org",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_29",
      "email": "user_29@mail.com",
      "branch": "Information Technology",
      "role": "Moderator"
    },
    {
      "username": "user_30",
      "email": "user_30@example.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_31",
      "email": "user_31@mail.com",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_32",
      "email": "user_32@mail.com",
      "branch": "Civil",
      "role": "User"
    },
    {
      "username": "user_33",
      "email": "user_33@example.com",
      "branch": "Mechanical",
      "role": "Admin"
    },
    {
      "username": "user_34",
      "email": "user_34@webmail.org",
      "branch": "Mechanical",
      "role": "Admin"
    },
    {
      "username": "user_35",
      "email": "user_35@mail.com",
      "branch": "Biomedical",
      "role": "Moderator"
    },
    {
      "username": "user_36",
      "email": "user_36@example.com",
      "branch": "Electrical",
      "role": "Viewer"
    },
    {
      "username": "user_37",
      "email": "user_37@mail.com",
      "branch": "Electrical",
      "role": "Admin"
    },
    {
      "username": "user_38",
      "email": "user_38@example.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_39",
      "email": "user_39@email.net",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_40",
      "email": "user_40@webmail.org",
      "branch": "Civil",
      "role": "Moderator"
    },
    {
      "username": "user_41",
      "email": "user_41@email.net",
      "branch": "Aerospace",
      "role": "Moderator"
    },
    {
      "username": "user_42",
      "email": "user_42@webmail.org",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_43",
      "email": "user_43@mail.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_44",
      "email": "user_44@mail.com",
      "branch": "Computer Science",
      "role": "User"
    },
    {
      "username": "user_45",
      "email": "user_45@webmail.org",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_46",
      "email": "user_46@webmail.org",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_47",
      "email": "user_47@example.com",
      "branch": "Aerospace",
      "role": "Admin"
    },
    {
      "username": "user_48",
      "email": "user_48@email.net",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_49",
      "email": "user_49@mail.com",
      "branch": "Information Technology",
      "role": "User"
    },
    {
      "username": "user_50",
      "email": "user_50@webmail.org",
      "branch": "Civil",
      "role": "Moderator"
    },
    {
      "username": "user_51",
      "email": "user_51@example.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_52",
      "email": "user_52@email.net",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_53",
      "email": "user_53@webmail.org",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_54",
      "email": "user_54@email.net",
      "branch": "Computer Science",
      "role": "Moderator"
    },
    {
      "username": "user_55",
      "email": "user_55@mail.com",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_56",
      "email": "user_56@example.com",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_57",
      "email": "user_57@mail.com",
      "branch": "Computer Science",
      "role": "User"
    },
    {
      "username": "user_58",
      "email": "user_58@webmail.org",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_59",
      "email": "user_59@mail.com",
      "branch": "Electrical",
      "role": "Moderator"
    },
    {
      "username": "user_60",
      "email": "user_60@webmail.org",
      "branch": "Information Technology",
      "role": "Viewer"
    },
    {
      "username": "user_61",
      "email": "user_61@email.net",
      "branch": "Aerospace",
      "role": "Admin"
    },
    {
      "username": "user_62",
      "email": "user_62@email.net",
      "branch": "Computer Science",
      "role": "Moderator"
    },
    {
      "username": "user_63",
      "email": "user_63@webmail.org",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_64",
      "email": "user_64@example.com",
      "branch": "Mechanical",
      "role": "User"
    },
    {
      "username": "user_65",
      "email": "user_65@webmail.org",
      "branch": "Information Technology",
      "role": "Viewer"
    },
    {
      "username": "user_66",
      "email": "user_66@example.com",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_67",
      "email": "user_67@webmail.org",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_68",
      "email": "user_68@webmail.org",
      "branch": "Mechanical",
      "role": "User"
    },
    {
      "username": "user_69",
      "email": "user_69@email.net",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_70",
      "email": "user_70@mail.com",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_71",
      "email": "user_71@mail.com",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_72",
      "email": "user_72@mail.com",
      "branch": "Aerospace",
      "role": "Admin"
    },
    {
      "username": "user_73",
      "email": "user_73@webmail.org",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_74",
      "email": "user_74@webmail.org",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_75",
      "email": "user_75@example.com",
      "branch": "Biomedical",
      "role": "Admin"
    },
    {
      "username": "user_76",
      "email": "user_76@email.net",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_77",
      "email": "user_77@email.net",
      "branch": "Aerospace",
      "role": "User"
    },
    {
      "username": "user_78",
      "email": "user_78@webmail.org",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_79",
      "email": "user_79@email.net",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_80",
      "email": "user_80@email.net",
      "branch": "Mechanical",
      "role": "Moderator"
    },
    {
      "username": "user_81",
      "email": "user_81@webmail.org",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_82",
      "email": "user_82@mail.com",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_83",
      "email": "user_83@email.net",
      "branch": "Mechanical",
      "role": "User"
    },
    {
      "username": "user_84",
      "email": "user_84@webmail.org",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_85",
      "email": "user_85@email.net",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_86",
      "email": "user_86@email.net",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_87",
      "email": "user_87@example.com",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_88",
      "email": "user_88@webmail.org",
      "branch": "Information Technology",
      "role": "Moderator"
    },
    {
      "username": "user_89",
      "email": "user_89@webmail.org",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_90",
      "email": "user_90@webmail.org",
      "branch": "Civil",
      "role": "Viewer"
    },
    {
      "username": "user_91",
      "email": "user_91@email.net",
      "branch": "Computer Science",
      "role": "User"
    },
    {
      "username": "user_92",
      "email": "user_92@webmail.org",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_93",
      "email": "user_93@email.net",
      "branch": "Electrical",
      "role": "Viewer"
    },
    {
      "username": "user_94",
      "email": "user_94@email.net",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_95",
      "email": "user_95@mail.com",
      "branch": "Mechanical",
      "role": "User"
    },
    {
      "username": "user_96",
      "email": "user_96@example.com",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_97",
      "email": "user_97@webmail.org",
      "branch": "Electrical",
      "role": "Admin"
    },
    {
      "username": "user_98",
      "email": "user_98@webmail.org",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_99",
      "email": "user_99@webmail.org",
      "branch": "Civil",
      "role": "User"
    },
    {
      "username": "user_100",
      "email": "user_100@email.net",
      "branch": "Computer Science",
      "role": "User"
    },
    {
      "username": "user_101",
      "email": "user_101@email.net",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_102",
      "email": "user_102@mail.com",
      "branch": "Electrical",
      "role": "Moderator"
    },
    {
      "username": "user_103",
      "email": "user_103@example.com",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_104",
      "email": "user_104@mail.com",
      "branch": "Civil",
      "role": "Viewer"
    },
    {
      "username": "user_105",
      "email": "user_105@webmail.org",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_106",
      "email": "user_106@webmail.org",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_107",
      "email": "user_107@example.com",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_108",
      "email": "user_108@example.com",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_109",
      "email": "user_109@webmail.org",
      "branch": "Aerospace",
      "role": "User"
    },
    {
      "username": "user_110",
      "email": "user_110@mail.com",
      "branch": "Electrical",
      "role": "Admin"
    },
    {
      "username": "user_111",
      "email": "user_111@example.com",
      "branch": "Electrical",
      "role": "Admin"
    },
    {
      "username": "user_112",
      "email": "user_112@example.com",
      "branch": "Information Technology",
      "role": "User"
    },
    {
      "username": "user_113",
      "email": "user_113@mail.com",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_114",
      "email": "user_114@example.com",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_115",
      "email": "user_115@mail.com",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_116",
      "email": "user_116@email.net",
      "branch": "Information Technology",
      "role": "Moderator"
    },
    {
      "username": "user_117",
      "email": "user_117@example.com",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_118",
      "email": "user_118@mail.com",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_119",
      "email": "user_119@webmail.org",
      "branch": "Aerospace",
      "role": "Admin"
    },
    {
      "username": "user_120",
      "email": "user_120@webmail.org",
      "branch": "Aerospace",
      "role": "Viewer"
    },
    {
      "username": "user_121",
      "email": "user_121@mail.com",
      "branch": "Biomedical",
      "role": "Admin"
    },
    {
      "username": "user_122",
      "email": "user_122@example.com",
      "branch": "Information Technology",
      "role": "User"
    },
    {
      "username": "user_123",
      "email": "user_123@email.net",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_124",
      "email": "user_124@mail.com",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_125",
      "email": "user_125@example.com",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_126",
      "email": "user_126@email.net",
      "branch": "Biomedical",
      "role": "Admin"
    },
    {
      "username": "user_127",
      "email": "user_127@webmail.org",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_128",
      "email": "user_128@email.net",
      "branch": "Civil",
      "role": "Viewer"
    },
    {
      "username": "user_129",
      "email": "user_129@email.net",
      "branch": "Electrical",
      "role": "Moderator"
    },
    {
      "username": "user_130",
      "email": "user_130@mail.com",
      "branch": "Electrical",
      "role": "Moderator"
    },
    {
      "username": "user_131",
      "email": "user_131@mail.com",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_132",
      "email": "user_132@mail.com",
      "branch": "Electronics",
      "role": "Viewer"
    },
    {
      "username": "user_133",
      "email": "user_133@example.com",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_134",
      "email": "user_134@email.net",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_135",
      "email": "user_135@webmail.org",
      "branch": "Civil",
      "role": "Moderator"
    },
    {
      "username": "user_136",
      "email": "user_136@example.com",
      "branch": "Computer Science",
      "role": "Moderator"
    },
    {
      "username": "user_137",
      "email": "user_137@example.com",
      "branch": "Electrical",
      "role": "User"
    },
    {
      "username": "user_138",
      "email": "user_138@email.net",
      "branch": "Information Technology",
      "role": "Viewer"
    },
    {
      "username": "user_139",
      "email": "user_139@mail.com",
      "branch": "Aerospace",
      "role": "User"
    },
    {
      "username": "user_140",
      "email": "user_140@mail.com",
      "branch": "Electrical",
      "role": "Moderator"
    },
    {
      "username": "user_141",
      "email": "user_141@webmail.org",
      "branch": "Mechanical",
      "role": "Moderator"
    },
    {
      "username": "user_142",
      "email": "user_142@mail.com",
      "branch": "Mechanical",
      "role": "User"
    },
    {
      "username": "user_143",
      "email": "user_143@email.net",
      "branch": "Electrical",
      "role": "Admin"
    },
    {
      "username": "user_144",
      "email": "user_144@mail.com",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_145",
      "email": "user_145@webmail.org",
      "branch": "Biomedical",
      "role": "Moderator"
    },
    {
      "username": "user_146",
      "email": "user_146@webmail.org",
      "branch": "Civil",
      "role": "Viewer"
    },
    {
      "username": "user_147",
      "email": "user_147@example.com",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_148",
      "email": "user_148@mail.com",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_149",
      "email": "user_149@example.com",
      "branch": "Aerospace",
      "role": "Viewer"
    },
    {
      "username": "user_150",
      "email": "user_150@example.com",
      "branch": "Civil",
      "role": "User"
    },
    {
      "username": "user_151",
      "email": "user_151@mail.com",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_152",
      "email": "user_152@example.com",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_153",
      "email": "user_153@email.net",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_154",
      "email": "user_154@example.com",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_155",
      "email": "user_155@webmail.org",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_156",
      "email": "user_156@email.net",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_157",
      "email": "user_157@example.com",
      "branch": "Electrical",
      "role": "Viewer"
    },
    {
      "username": "user_158",
      "email": "user_158@email.net",
      "branch": "Information Technology",
      "role": "Moderator"
    },
    {
      "username": "user_159",
      "email": "user_159@email.net",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_160",
      "email": "user_160@example.com",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_161",
      "email": "user_161@webmail.org",
      "branch": "Biomedical",
      "role": "Moderator"
    },
    {
      "username": "user_162",
      "email": "user_162@email.net",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_163",
      "email": "user_163@example.com",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_164",
      "email": "user_164@mail.com",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_165",
      "email": "user_165@email.net",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_166",
      "email": "user_166@example.com",
      "branch": "Information Technology",
      "role": "Viewer"
    },
    {
      "username": "user_167",
      "email": "user_167@example.com",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_168",
      "email": "user_168@mail.com",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_169",
      "email": "user_169@webmail.org",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_170",
      "email": "user_170@mail.com",
      "branch": "Information Technology",
      "role": "User"
    },
    {
      "username": "user_171",
      "email": "user_171@email.net",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_172",
      "email": "user_172@mail.com",
      "branch": "Electrical",
      "role": "Admin"
    },
    {
      "username": "user_173",
      "email": "user_173@email.net",
      "branch": "Civil",
      "role": "Admin"
    },
    {
      "username": "user_174",
      "email": "user_174@example.com",
      "branch": "Biomedical",
      "role": "User"
    },
    {
      "username": "user_175",
      "email": "user_175@mail.com",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_176",
      "email": "user_176@mail.com",
      "branch": "Computer Science",
      "role": "User"
    },
    {
      "username": "user_177",
      "email": "user_177@example.com",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_178",
      "email": "user_178@email.net",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_179",
      "email": "user_179@webmail.org",
      "branch": "Computer Science",
      "role": "Admin"
    },
    {
      "username": "user_180",
      "email": "user_180@email.net",
      "branch": "Mechanical",
      "role": "Moderator"
    },
    {
      "username": "user_181",
      "email": "user_181@mail.com",
      "branch": "Biomedical",
      "role": "Admin"
    },
    {
      "username": "user_182",
      "email": "user_182@email.net",
      "branch": "Electronics",
      "role": "Admin"
    },
    {
      "username": "user_183",
      "email": "user_183@mail.com",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_184",
      "email": "user_184@email.net",
      "branch": "Computer Science",
      "role": "Moderator"
    },
    {
      "username": "user_185",
      "email": "user_185@example.com",
      "branch": "Civil",
      "role": "User"
    },
    {
      "username": "user_186",
      "email": "user_186@webmail.org",
      "branch": "Computer Science",
      "role": "Viewer"
    },
    {
      "username": "user_187",
      "email": "user_187@email.net",
      "branch": "Civil",
      "role": "Moderator"
    },
    {
      "username": "user_188",
      "email": "user_188@mail.com",
      "branch": "Mechanical",
      "role": "Viewer"
    },
    {
      "username": "user_189",
      "email": "user_189@example.com",
      "branch": "Aerospace",
      "role": "Viewer"
    },
    {
      "username": "user_190",
      "email": "user_190@email.net",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_191",
      "email": "user_191@mail.com",
      "branch": "Biomedical",
      "role": "Viewer"
    },
    {
      "username": "user_192",
      "email": "user_192@mail.com",
      "branch": "Information Technology",
      "role": "User"
    },
    {
      "username": "user_193",
      "email": "user_193@mail.com",
      "branch": "Aerospace",
      "role": "Moderator"
    },
    {
      "username": "user_194",
      "email": "user_194@email.net",
      "branch": "Electronics",
      "role": "Moderator"
    },
    {
      "username": "user_195",
      "email": "user_195@example.com",
      "branch": "Computer Science",
      "role": "User"
    },
    {
      "username": "user_196",
      "email": "user_196@webmail.org",
      "branch": "Information Technology",
      "role": "Admin"
    },
    {
      "username": "user_197",
      "email": "user_197@email.net",
      "branch": "Electrical",
      "role": "Moderator"
    },
    {
      "username": "user_198",
      "email": "user_198@email.net",
      "branch": "Electronics",
      "role": "User"
    },
    {
      "username": "user_199",
      "email": "user_199@example.com",
      "branch": "Aerospace",
      "role": "Admin"
    },
    {
      "username": "user_200",
      "email": "user_200@example.com",
      "branch": "Aerospace",
      "role": "User"
    }
  ];

export default function Page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center">
      <div className="w-[90vw] min-h-screen bg-secondary dark:bg-zinc-950 mt-14">
        <h1 className="text-4xl pt-5 pb-2">Users</h1>
        <Card className="min-h-[80vh]">
          <Table>
            <TableCaption>A list of recent Users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead className="text-right max-sm:hidden">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.branch}</TableCell>
                  <TableCell className="text-right max-sm:hidden">{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
