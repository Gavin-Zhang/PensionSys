layui.define(['jquery', 'dropdown', 'table', 'form'], function (exports) {
    "use strict";

    var dropdown = layui.dropdown, //下拉菜单
        table = layui.table, //table组件
        $ = layui.jquery, //jQuery
        form = layui.form, //表单
        moduleName = 'dropdownTable', //模块名

        dropdownTable = {
            version: '1.0.2',
            config: {
                selectType: 'radio',
                emptyMsg: '点击此处完成选择'
            },
            index: layui[moduleName] ? (layui[moduleName].index + 10000) : 0,
            set: function (options) {
                this.config = $.extend(true, {}, that.config, options);
                let config = this.config,
                    selectType = config.selectType,
                    selectField = { type: selectType, fixed: 'left' },
                    cols = config?.selectTable?.cols ?? [[]];
                cols.forEach((item) => {
                    if (JSON.stringify(item).indexOf(JSON.stringify(selectField)) < 0) {
                        item.splice(0, 0, selectField);
                    }
                });
                return that;
            }
        },
        //操作当前实例
        thisModule = function () {
            let that = this,
                options = that.config,
                id = options.id || that.index;

            thisModule.that[id] = that; //记录当前实例对象

            return {
                config: options,
                //重置实例
                reload: function (options) {
                    that.reload.call(that, options);
                }
            };
        },
        //构造器
        Class = function (options) {
            let index = ++dropdownTable.index;
            this.index = index;
            this.tableId = 'dropdown-select-table-' + index; //初始化当前下拉表格的ID
            this.dropdownId = 'dropdown-' + index; //初始化当前下拉组件的ID
            //其中selectedIds为初始化被选择的值，selectedDisplayValues为初始化被选中值的显示值
            this.config = $.extend(true, {}, dropdownTable.config, options, { selectedIds: [], selectedDisplayValues: [] });
            let config = this.config,
                selectType = config.selectType,
                selectField = { type: selectType, fixed: 'left' },
                selectTableCols = config?.selectTable?.cols ?? [[]];
            if (selectType === 'checkbox') {
                selectTableCols.forEach((item) => {
                    if (JSON.stringify(item).indexOf(JSON.stringify(selectField)) < 0) {
                        item.splice(0, 0, selectField);
                    }
                });
            }
            this.customRowCheckBack = config.selectTable.rowBack ?? null;
            this.render();
        };

    //重载表格实例
    Class.prototype.reloadSelectTable = function (selectTableConfig) {
        let config = this.config;
        layui.each(selectTableConfig, function (key, item) {
            // if (layui.type(item) === 'array') delete config.selectTable[key];
            if (config.selectTable[key] !== undefined) delete config.selectTable[key];
        });
        $.extend(true, config.selectTable, selectTableConfig);
        this.clearSelected();
    };

    //清空选中
    Class.prototype.clearSelected = function () {
        let config = this.config,
            bindInput = config.bindInput;
        $(bindInput).val(""); //清空选中的值
        $(bindInput)[0].dataset.displayValue = ''; //清空绑定的显示值
        $.extend(config, { selectedIds: [], selectedDisplayValues: [] });
        this.setSelectedDisplayAndValue(); //设置选中显示值为空
    }

    //渲染
    Class.prototype.render = function () {
        let that = this,
            options = that.config;

        let _this = options.elem = $(options.elem);
        if (!_this[0]) return;

        that.iniDropdown(); //初始化
    };

    //初始化下拉组件
    Class.prototype.iniDropdown = function () {
        let that = this,
            config = that.config,
            elem = config.elem;

        dropdown.render({
            id: config.id ?? that.index,
            elem: elem,
            trigger: 'click',
            content: that.iniSelectTableHtml(),
            style: config?.style ?? 'box-sizing:border-box; padding:10px;',
            ready: function () {
                that.iniSelectTable();
                that.bindRowCheckToSelectTable();
                that.bindSelectBoxEventToSelectTable();
                that.bindSearchToSelectTable();
                that.bindAddInputData();
            }
        });
    };

    //初始化table的html文件
    Class.prototype.iniSelectTableHtml = function () {
        let index = this.index,
            tableId = this.tableId,
            searchName = this.config?.searchName ?? 'keywords',
            auxiliaryType = this.config?.auxiliaryType ?? '',
            selectTableSearchFormId = 'select-table-search-' + index,
            selectTableSearchButtonId = 'select-table-search-button-' + index,
            selectTablesAddButtionId = 'select-table-add-button-' + index;

        $.extend(this.config, { selectTableSearchFormId: selectTableSearchFormId, 
            selectTableSearchButtonId: selectTableSearchButtonId, 
            selectTablesAddButtionId: selectTablesAddButtionId});
        
        let base = [
            '<div class="chosen-window" id="chosen-window" style="height:100%;">',
            '<script type="text/html" id="' + selectTableSearchFormId + '">',
            '<form class="layui-form layui-row">',
        ].join('');

        let search = "";
        let add = "";
        
        if (auxiliaryType === 'search') {
            search = [
                '<div class="layui-inline">',
                '<div class="layui-input-inline">',
                '<input type="text" name="' + searchName + '" placeholder="请输入要搜索的内容" class="layui-input">',
                '</div>',
                '</div>',
                '<div class="layui-inline"><button class="layui-btn" lay-submit lay-filter="' + selectTableSearchButtonId + '">搜索</button></div>',
            ].join('');
        } else if (auxiliaryType === 'add') {
            add = [
                '<div class="layui-inline">',
                '<div class="layui-input-inline">',
                '<input type="text" name="inputword" placeholder="请输入要添加的内容" class="layui-input">',
                '</div>',
                '</div>',
                '<div class="layui-inline">',
                '<div class="layui-input-inline">',
                '<div class="layui-inline"><button class="layui-btn" lay-submit lay-filter="' + selectTablesAddButtionId + '">添加</button></div>',
                '</div>',
                '</div>'
            ].join('');
        }

        let end = [ 
            '</form>',
            '</script>',
            '<table class="layui-hide" id="' + tableId + '" lay-filter="' + tableId + '"></table>',
            '</div>',
        ].join('');

        return base + search + add + end;
    }

    //初始化表格
    Class.prototype.iniSelectTable = function () {
        let that = this,
            config = that.config,
            tableId = that.tableId,
            selectTable = config.selectTable,
            tableNeedConfig = {
                id: tableId,
                elem: '#' + tableId,
                toolbar: '#' + config.selectTableSearchFormId,
                defaultToolbar: ['filter'],
                height: '#chosen-window-1',
                done: function (res) {
                    that.iniDefaultSelected(res.data)
                }
            },
            tableConfig = $.extend({}, selectTable, tableNeedConfig);
        table.render(tableConfig);
    };

    //处理默认选中值的问题
    Class.prototype.iniDefaultSelected = function (tableData = []) {
        let that = this,
            tableId = that.tableId,
            config = that.config,
            selectType = config.selectType,
            bindInput = config.bindInput,
            bindInputValue = $(bindInput).val() ?? '',
            bindInputDisplayValue = $(bindInput)[0].dataset.displayValue ?? '';

        config.selectedIds = bindInputValue.split("$").filter(item => item !== '');
        config.selectedDisplayValues = bindInputDisplayValue.split("$").filter(item => item !== '');

        if (tableData.length === 0) {
            that.setSelectedDisplayAndValue();
            return;
        }

        table.setRowChecked(tableId, { index: 'all', checked: false });
        let selectedIds = config.selectedIds;
        if (selectedIds.length > 0) {
            let tableIdData = tableData.map(item => item[config.selectTable.uniqueId].toString());
            if (selectType === 'radio' && selectedIds.length === 1) {
                let selectedItemIndex = tableIdData.indexOf(selectedIds[0].toString());
                if (selectedItemIndex >= 0) {
                    table.setRowChecked(tableId, { type: selectType, index: selectedItemIndex, checked: true })
                }
            } else {
                tableIdData.forEach(function (item, itemIndex) {
                    table.setRowChecked(tableId, { type: selectType, index: itemIndex, checked: selectedIds.includes(item) });
                });
            }
        }
        that.setSelectedDisplayAndValue();
    }

    //处理选择框事件
    Class.prototype.bindSelectBoxEventToSelectTable = function () {
        let that = this,
            options = that.config,
            selectType = options.selectType,
            uniqueId = options.selectTable.uniqueId,
            displayField = options.selectTable.displayField,
            tableId = that.tableId;

        if (selectType === 'radio') { //单选
            table.on('radio(' + tableId + ')', function (obj) {
                dealRadioSelectedData(obj.checked, obj.data);
            });
        } else { //复选框
            table.on('checkbox(' + tableId + ')', function (obj) {
                let eventType = obj.type,
                    checked = obj.checked;

                if (eventType === 'all') {
                    table.getData(tableId).forEach(function (rowData) {
                        dealCheckboxSelectedData(checked, rowData);
                    });
                }

                if (eventType === 'one') {
                    dealCheckboxSelectedData(checked, obj.data);
                }
            });
        }

        function dealRadioSelectedData(checked, rowData) {
            let rowId = rowData[uniqueId].toString();
            that.config.selectedIds = [];
            that.config.selectedDisplayValues = [];
            if (checked) {
                that.config.selectedIds.push(rowId);
                that.config.selectedDisplayValues.push(rowData[displayField]);
            }
            that.setSelectedDisplayAndValue();
        }

        function dealCheckboxSelectedData(checked, rowData) {
            let rowId = rowData[uniqueId].toString();
            //处理选中
            if (checked && !that.config.selectedIds.includes(rowId)) {
                that.config.selectedIds.push(rowId);
                that.config.selectedDisplayValues.push(rowData[displayField]);
            }

            //处理未选中
            if (!checked) {
                let cancelIndex = that.config.selectedIds.indexOf(rowId);
                if (rowId > -1) {
                    that.config.selectedIds.splice(cancelIndex, 1);
                    that.config.selectedDisplayValues.splice(cancelIndex, 1);
                }
            }
            that.setSelectedDisplayAndValue();
        }

    }

    //自定义行点击事件后数据返回
    Class.prototype.customRowCheckBack = null;

    //绑定行点击事件到选择表中
    Class.prototype.bindRowCheckToSelectTable = function () {
        let that = this,
            tableId = that.tableId,
            options = that.config,
            selectType = options.selectType,
            uniqueId = options.selectTable.uniqueId,
            displayField = options.selectTable.displayField;

        table.on('row(' + tableId + ')', function (obj) {
            let rowId = obj.data[uniqueId].toString(),
                checked;

            if (!that.config.selectedIds.includes(rowId)) {
                if (selectType === 'radio') {
                    that.config.selectedIds = [];
                    that.config.selectedDisplayValues = [];
                }
                that.config.selectedIds.push(rowId);
                that.config.selectedDisplayValues.push(obj.data[displayField]);
                checked = true;
            } else {
                let cancelSelectedIdIndex = that.config.selectedIds.indexOf(rowId);
                that.config.selectedIds.splice(cancelSelectedIdIndex, 1);
                that.config.selectedDisplayValues.splice(cancelSelectedIdIndex, 1);
                checked = false;
            }
            obj.setRowChecked({
                type: selectType,
                checked: checked
            });
            that.setSelectedDisplayAndValue();

            if (checked && selectType === 'radio') {
                dropdown.close(that.config.id)
            }

            if (that.customRowCheckBack != null) {
                that.customRowCheckBack(obj.data)
            }
            
        });
    };

    //绑定表格的搜索事件
    Class.prototype.bindSearchToSelectTable = function () {
        let tableId = this.tableId,
            selectTableSearchButtonId = this.config.selectTableSearchButtonId;
        form.on('submit(' + selectTableSearchButtonId + ')', function (data) {
            table.reload(tableId, { page: { curr: 1 }, where: data.field });
            return false;
        });
    }

    //绑定添加输入表格数据以外的数据事件
    Class.prototype.bindAddInputData = function () {
        let that = this,
            tableId = this.tableId,
            options = that.config,
            selectType = options.selectType,
            selectTablesAddButtionId = this.config.selectTablesAddButtionId;
        form.on('submit(' + selectTablesAddButtionId + ')', function (data) {
            if (selectType === 'radio') {
                that.config.selectedIds = [];
                that.config.selectedDisplayValues = [];
            }
            that.config.selectedIds.push(data.field.inputword);
            that.config.selectedDisplayValues.push(data.field.inputword);
            that.setSelectedDisplayAndValue();
            table.reload(tableId, {  });
            return false;
        });
    }

    //设置显示值和实际存储值
    Class.prototype.setSelectedDisplayAndValue = function () {
        let that = this,
            tableId = that.tableId,
            options = that.config,
            elem = options.elem,
            bindInput = options.bindInput,
            selectedIds = options?.selectedIds ?? [],
            selectDisplayValues = options.selectedDisplayValues,
            emptyMsg = options.emptyMsg;

        elem.find("span").remove();
        if (selectedIds.length > 0) {
            selectedIds.forEach((item, itemIndex) => {
                let selectedDisplayValue = selectDisplayValues[itemIndex],
                    closeObject = $('<span style="margin-left:5px;color:#fff" data-selected-id="' + item + '">×<span>'),
                    displayHtml = [
                        '<span class="layui-badge layui-bg-green">' + selectedDisplayValue,
                        '</span>',
                    ].join(''),
                    displayObject = $(displayHtml).append(closeObject);

                displayObject.attr({
                    "style": options?.badgeStyle ?? "margin-left:5px;font-size:14px;padding:4px 6px"
                });

                //绑定鼠标事件
                closeObject.on('mouseenter mouseleave', function (event) {
                    let optType = event.type,
                        fontColor = optType === 'mouseleave' ? 'white' : 'red';
                    $(this).attr({ "style": "color:" + fontColor + ";margin-left:5px;cursor:pointer" })
                });

                closeObject.on('click', function () {
                    let _this = this,
                        tableIdData = table.getData(tableId).map(item => item[options.selectTable.uniqueId]),
                        selectedId = _this.dataset.selectedId,
                        cancelSelectedIdIndex = that.config.selectedIds.indexOf(selectedId);
                    that.config.selectedIds.splice(cancelSelectedIdIndex, 1);
                    that.config.selectedDisplayValues.splice(cancelSelectedIdIndex, 1);
                    if (tableIdData.includes(selectedId)) {
                        if (options.selectType === 'radio') {
                            table.setRowChecked(tableId, {
                                type: 'radio',
                                index: 'all',
                                checked: false
                            });
                        } else {
                            table.setRowChecked(tableId, {
                                type: options.selectType,
                                index: tableIdData.indexOf(selectedId),
                                checked: false
                            });
                        }
                    }
                    that.setSelectedDisplayAndValue();
                });
                elem.append(displayObject);
            });
        } else {
            elem.append('<span class="layui-font-gray layui-font-14" style="margin-left:5px;">' + emptyMsg + '</span>');
        }
        $(bindInput).val(selectedIds.join("$")).trigger('change');
        $(bindInput)[0].dataset.displayValue = selectDisplayValues.join("$");
    }

    //记录所有实例
    thisModule.that = {}; //记录所有实例对象

    //获取当前实例对象
    thisModule.getThis = function (id) {
        let that = thisModule.that[id];
        if (!that) hint.error(id ? (moduleName + ' instance with ID \'' + id + '\' not found') : 'ID argument required');

        return that;
    }

    //重载实例
    dropdownTable.reloadSelectTable = function (id, selectTableConfig) {
        let that = thisModule.getThis(id);
        that.reloadSelectTable(selectTableConfig);
        return thisModule.call(that);
    }

    //请空已选择
    dropdownTable.clearSelected = function (id) {
        let that = thisModule.getThis(id);
        that.clearSelected();
    }

    //核心入口
    dropdownTable.render = function (options) {
        let inst = new Class(options);
        // if (dropdownTable.index === 1)
        //     console.log("欢迎使用Hg科技的dropdownTable组件，version:" + dropdownTable.version + ",期待您的建议！");

        inst.iniDefaultSelected();
        return thisModule.call(inst);
    }

    exports(moduleName, dropdownTable);
});
