<?php
namespace app\modules\api\controllers;

use app\models\Category;
use yii\data\ActiveDataProvider;

use yii\rest\ActiveController;

class CategoryController extends ActiveController
{
    public $modelClass = 'app\models\Category';
    public static function allowedDomains()
    {
        return [
            // '*',                        // star allows all domains
            'http://export.mysite',
            'http://localhost:3000',
            'http://localhost:3030',
            'http://localhost:3033',
            "http://alex.dmitxe.ru",
            "https://alex.dmitxe.ru",
            "http://alex.dmitxe.ru:3333",
            "https://xn--80ahyfc6d7ba.xn--80aabfyii3adadgocjt5p1b.xn--p1ai",
            "https://xn--80aabfyii3adadgocjt5p1b.xn--p1ai"

            
        ];
    }
}



