<?php

namespace App\Enums;

enum ReactionTypes: int
{
    case Like = 1;
    case Love = 2;
    case Cry = 3;
    case LaughingCry = 4;
    case Angry = 5;
    case Wow = 6;
    case Sad = 7;

    /**
     * @return array<string, int>
     */
    public static function getList(): array
    {
        return [
            self::Like->name => self::Like->value,
            self::Love->name => self::Love->value,
            self::Cry->name => self::Cry->value,
            self::LaughingCry->name => self::LaughingCry->value,
            self::Angry->name => self::Angry->value,
            self::Wow->name => self::Wow->value,
            self::Sad->name => self::Sad->value,
        ];
    }

}

