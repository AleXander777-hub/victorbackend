<?php

use yii\db\Migration;

/**
 * Class m180612_014404_add_vk_id
 */
class m180612_014404_add_vk_id extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%user}}', 'vk_id', $this->integer()->null());
        $this->createIndex('idx_vk_id', '{{%user}}', ['vk_id']);
        $this->addColumn('{{%user}}', 'vk_auth_key', $this->string()->null());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%user}}', 'vk_id');
        $this->dropColumn('{{%user}}', 'vk_auth_key');

        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180612_014404_add_vk_id cannot be reverted.\n";

        return false;
    }
    */
}
