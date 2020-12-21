<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
use yii\web\Link;
use yii\web\Linkable;
use yii\helpers\Url;

/**
 * This is the model class for table "post".
 *
 * @property int $id id
 * @property int|null $category_id Категория
 * @property int|null $author_id Автор
 * @property string $created_at Дата создания
 * @property int $is_commentable Разрешено комментирвоать
 * @property int $is_enable Включено
 * @property string|null $modified_at Дата обновления
 * @property string $slug Алиас
 * @property string $title Название
 * @property string|null $meta_title Мета заголовок
 * @property string|null $keywords Мета теги
 * @property string|null $description Мета теги описание
 * @property int $status Ствтус
 * @property string $media Картинка
 * @property string $text Текст
 * @property string|null $annotation Аннотация
 *
 * @property Category $category
 * @property User $author
 */
class Post extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'post';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['category_id', 'author_id', 'is_commentable', 'is_enable', 'status'], 'integer'],
            [['is_commentable', 'slug', 'title', 'status', 'text'], 'required'],
            [['created_at', 'modified_at'], 'safe'],
            [['text', 'annotation'], 'string'],
            [['slug', 'title', 'meta_title', 'keywords', 'description'], 'string', 'max' => 255],
            [['media'], 'string', 'max' => 255],
            [['slug'], 'unique'],
            [['created_at'], 'unique'],
            [['category_id'], 'exist', 'skipOnError' => true, 'targetClass' => Category::className(), 'targetAttribute' => ['category_id' => 'id']],
            [['author_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['author_id' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'id',
            'category_id' => 'Категория',
            'author_id' => 'Автор',
            'created_at' => 'Дата создания',
            'is_commentable' => 'Разрешено комментирвоать',
            'is_enable' => 'Включено',
            'modified_at' => 'Дата обновления',
            'slug' => 'Алиас',
            'title' => 'Название',
            'meta_title' => 'Мета заголовок',
            'keywords' => 'Мета теги',
            'description' => 'Мета теги описание',
            'status' => 'Ствтус',
            'media' => 'Картинка',
            'text' => 'Текст',
            'annotation' => 'Аннотация',
        ];
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            if ($insert) {
                // Да это новая запись (insert)
                $this->created_at = date('Y-m-d H:i:s');
                $this->author_id = Yii::$app->user->id;
            }
            $this->modified_at = date('Y-m-d H:i:s');
            return true;
        }
        return false;
    }

    /**
     * Gets query for [[Category]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }

    /**
     * Gets query for [[Author]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getAuthor()
    {
        return $this->hasOne(User::className(), ['id' => 'author_id']);
    }

    public function getLinks()
    {
        return [
            Link::REL_SELF => Url::to(['api/post/view', 'id' => $this->id], true),
        ];
    }
}
