<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-5 col-md-2 col-md-offset-0">.col-sm-5 .col-md-6</div>
            <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-2">
                <table class="table table-striped table-bordered table-hover table-condensed">
                    <thead>
                        <tr>
                        <th>表格标题</th>
                        <th>表格标题</th>
                        <th>表格标题</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        </tr>
                        <tr>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        <td>表格单元格</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-12 col-lg-12">
                <form role="form" class="form-horizontal">
                    <div class="form-group">
                        <label for="name" class="col-sm-1">name</label>
                        <div class="col-sm-11">
                        <input type="text" id="name" class="form-control input-lg"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">name</label>
                        <input type="text" id="name" class="form-control"/>
                        <label for="name">name</label>
                        <input type="text" id="name" class="form-control"/>
                        <label for="name">name</label>
                        <input type="text" id="name" class="form-control"/>
                    </div>
                </form>
            </div>
            <div class="col-sm-6 col-md-3 col-md-offset-2 col-lg-5 col-lg-offset-5">
                <ul class="list-unstyled list-inline">
                    <li>gsg</li>
                    <li>fafa</li>
                    <li>afa</li>
                    <li>afa</li>
                    <li>fafa</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    .container-fluid {
        .row div{
            //margin-left:20px;
            margin-bottom:10px;
        }
    }
</style>

<script>
    export default {
    }
</script>